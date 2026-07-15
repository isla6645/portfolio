/* ============================================================
   Nadia Islam — Portfolio scripts (vanilla JS, no libraries)
   1. Cluster diagram: draws a 6-node Redis cluster in SVG and
      animates a failover when the button is pressed.
   2. Mobile navigation toggle.
   3. Active-section highlighting + scroll-reveal (IntersectionObserver).
   4. Contact form validation with inline feedback.
   ============================================================ */

"use strict";

/* Respect the user's motion preferences everywhere */
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------
   1. CLUSTER DIAGRAM
   Mirrors my Redis project: 3 masters + 3 replicas. Pressing the
   button "kills" a random master; its replica is promoted
   (amber → green), then the cluster heals back to steady state.
   ------------------------------------------------------------ */
(function clusterDiagram() {
  const svgNodes = document.getElementById("clusterNodes");
  const svgLinks = document.getElementById("clusterLinks");
  const statusEl = document.getElementById("clusterStatus");
  const lightEl = document.getElementById("clusterLight");
  const btn = document.getElementById("failoverBtn");
  if (!svgNodes || !btn) return; // hero not on this page

  const SVG_NS = "http://www.w3.org/2000/svg";

  // Node layout: masters on an inner triangle, replicas on an outer one.
  const nodes = [
    { id: "m1", label: "master-1", x: 180, y: 70,  master: true  },
    { id: "m2", label: "master-2", x: 95,  y: 210, master: true  },
    { id: "m3", label: "master-3", x: 265, y: 210, master: true  },
    { id: "r1", label: "replica-1", x: 60,  y: 80,  master: false, of: "m1" },
    { id: "r2", label: "replica-2", x: 180, y: 285, master: false, of: "m2" },
    { id: "r3", label: "replica-3", x: 300, y: 80,  master: false, of: "m3" }
  ];

  // Draw gossip links: every node talks to every other node.
  const lines = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttribute("x1", nodes[i].x);
      line.setAttribute("y1", nodes[i].y);
      line.setAttribute("x2", nodes[j].x);
      line.setAttribute("y2", nodes[j].y);
      line.setAttribute("class", "link-line");
      svgLinks.appendChild(line);
      lines.push(line);
    }
  }

  // Draw nodes: a circle plus a mono label underneath.
  nodes.forEach((n) => {
    const g = document.createElementNS(SVG_NS, "g");

    const circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttribute("cx", n.x);
    circle.setAttribute("cy", n.y);
    circle.setAttribute("r", n.master ? 20 : 14);
    circle.setAttribute("class", n.master ? "node__circle" : "node__circle node__circle--replica");
    g.appendChild(circle);

    const label = document.createElementNS(SVG_NS, "text");
    label.setAttribute("x", n.x);
    label.setAttribute("y", n.y + (n.master ? 38 : 30));
    label.setAttribute("class", "node__label");
    label.textContent = n.label;
    g.appendChild(label);

    svgNodes.appendChild(g);
    n.circle = circle;   // keep references for the animation
    n.labelEl = label;
  });

  // Ambient "gossip" pulse: one random link brightens briefly.
  if (!REDUCED_MOTION) {
    setInterval(() => {
      const line = lines[Math.floor(Math.random() * lines.length)];
      line.setAttribute("class", "link-line link-line--pulse");
      setTimeout(() => line.setAttribute("class", "link-line"), 450);
    }, 900);
  }

  // Failover simulation, triggered by the button.
  let busy = false;
  btn.addEventListener("click", () => {
    if (busy) return; // ignore clicks mid-simulation
    busy = true;
    btn.disabled = true;

    const masters = nodes.filter((n) => n.master);
    const victim = masters[Math.floor(Math.random() * masters.length)];
    const replica = nodes.find((n) => n.of === victim.id);

    // Step 1 — the master dies.
    victim.circle.setAttribute("class", "node__circle node__circle--down");
    lightEl.classList.add("cluster__light--warn");
    statusEl.textContent = `${victim.label} DOWN · cluster degraded · electing replacement…`;

    // Step 2 — its replica is promoted (amber while promoting).
    setTimeout(() => {
      replica.circle.setAttribute("class", "node__circle node__circle--promoting");
      statusEl.textContent = `${replica.label} promoting → reassigning hash slots…`;
    }, REDUCED_MOTION ? 0 : 1100);

    // Step 3 — promotion complete: replica is now a full master.
    setTimeout(() => {
      replica.circle.setAttribute("class", "node__circle");
      replica.circle.setAttribute("r", 20);
      replica.labelEl.textContent = replica.label.replace("replica", "master*");
      statusEl.textContent = `failover complete · ${replica.label} promoted · slots covered — no data loss`;
    }, REDUCED_MOTION ? 0 : 2300);

    // Step 4 — reset to steady state so it can be run again.
    setTimeout(() => {
      victim.circle.setAttribute("class", "node__circle");
      replica.circle.setAttribute("class", "node__circle node__circle--replica");
      replica.circle.setAttribute("r", 14);
      replica.labelEl.textContent = replica.label;
      lightEl.classList.remove("cluster__light--warn");
      statusEl.textContent = "cluster ok · 3 masters / 3 replicas · 16,384 slots";
      btn.disabled = false;
      busy = false;
    }, REDUCED_MOTION ? 1500 : 5200);
  });
})();

/* ------------------------------------------------------------
   2. MOBILE NAVIGATION
   ------------------------------------------------------------ */
(function mobileNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  // Close the menu after a link is chosen (small screens).
  menu.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

/* ------------------------------------------------------------
   3. ACTIVE-SECTION HIGHLIGHT + SCROLL REVEAL
   ------------------------------------------------------------ */
(function scrollBehavior() {
  const links = document.querySelectorAll(".nav__link[href^='#']");
  const sections = document.querySelectorAll("main section[id]");

  // Highlight the nav link for whichever section is in view.
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" } // trigger near viewport middle
  );
  sections.forEach((s) => navObserver.observe(s));

  // Fade sections in the first time they scroll into view.
  const inners = document.querySelectorAll(".section .section__inner");
  if (REDUCED_MOTION) {
    inners.forEach((el) => el.classList.add("revealed"));
    return;
  }
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target); // reveal once, then stop watching
        }
      });
    },
    { threshold: 0.12 }
  );
  inners.forEach((el) => revealObserver.observe(el));
})();

/* ------------------------------------------------------------
   4. CONTACT FORM
   Validates inline, then submits to Formspree if an endpoint is
   configured below. If not, it opens a pre-filled email draft
   (mailto:) so the form still works on a static host.
   ------------------------------------------------------------ */
(function contactForm() {
  // Create a free form at https://formspree.io, then paste its
  // endpoint here, e.g. "https://formspree.io/f/abcdwxyz".
  const FORMSPREE_ENDPOINT = "";

  const form = document.getElementById("contactForm");
  if (!form) return;

  const fields = {
    name: { input: document.getElementById("name"), error: document.getElementById("nameError") },
    email: { input: document.getElementById("email"), error: document.getElementById("emailError") },
    message: { input: document.getElementById("message"), error: document.getElementById("messageError") }
  };
  const statusEl = document.getElementById("formStatus");
  const sendBtn = document.getElementById("sendBtn");

  // Basic (not exhaustive) email shape check.
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(key) {
    const { input, error } = fields[key];
    const value = input.value.trim();
    let msg = "";

    if (!value) {
      msg = "This field is required.";
    } else if (key === "email" && !EMAIL_RE.test(value)) {
      msg = "Enter a valid email address, like name@example.com.";
    } else if (key === "message" && value.length < 10) {
      msg = "Add a little more detail (at least 10 characters).";
    }

    error.textContent = msg;
    input.classList.toggle("is-invalid", Boolean(msg));
    return !msg;
  }

  // Validate as the user leaves each field, and clear errors while typing.
  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener("blur", () => validateField(key));
    fields[key].input.addEventListener("input", () => {
      if (fields[key].input.classList.contains("is-invalid")) validateField(key);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validate everything; focus the first invalid field.
    const results = Object.keys(fields).map((key) => ({ key, ok: validateField(key) }));
    const firstBad = results.find((r) => !r.ok);
    if (firstBad) {
      fields[firstBad.key].input.focus();
      statusEl.textContent = "Please fix the highlighted fields.";
      return;
    }

    const name = fields.name.input.value.trim();
    const email = fields.email.input.value.trim();
    const message = fields.message.input.value.trim();

    if (FORMSPREE_ENDPOINT) {
      // Async submission with visible progress + success/error feedback.
      sendBtn.disabled = true;
      statusEl.textContent = "Sending…";
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message })
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        statusEl.textContent = "Message sent — thank you! I'll reply soon.";
        form.reset();
      } catch (err) {
        statusEl.textContent = "Something went wrong. Email me directly at islnadia120@gmail.com.";
      } finally {
        sendBtn.disabled = false;
      }
    } else {
      // Static-host fallback: open the visitor's mail app pre-filled.
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:islnadia120@gmail.com?subject=${subject}&body=${body}`;
      statusEl.textContent = "Opening your email app with the message pre-filled…";
    }
  });
})();
