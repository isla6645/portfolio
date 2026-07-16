# Nadia Islam — Personal Portfolio Website

**Live site:** `https://isla6645.github.io/<repo-name>/`
**Repo:** `https://github.com/isla6645/<repo-name>`

---

## 1. Project Overview

The goal of this site is to present myself professionally to recruiters and hiring managers for **software engineering roles**. It replaces my earlier landing page ([isla6645.github.io/landingwebsite](https://isla6645.github.io/landingwebsite/)) with a stronger design system, my newest cloud projects, and more interactivity — all responsive and accessible.

The site is a single-page application (one HTML file, anchored sections) with a sticky navigation bar, an interactive hero, and six content sections: About, Technical Skills, Work Experience, Projects, Education, and Contact.

## 2. Target Audience

Employers — specifically recruiters and engineering hiring managers screening candidates for internships and new-grad software engineering roles. Design implications:

- Recruiters skim: the value proposition (who I am, what I do) must land in the first screen.
- Concrete numbers beat adjectives: benchmark results and outcome metrics are visually elevated.
- Two clear calls to action everywhere: **View projects** and **Download resume (PDF)**.

## 3. Content Strategy

### Part 1: Content — Questions & Answers

**1. What is your full name as you want it displayed professionally?**
Nadia Islam.

**2. What is the purpose of your portfolio website?**
To present myself to recruiters — a fast, credible overview of my skills and proof of work.

**3. Who is the target audience?**
Employers (recruiters and hiring managers).

**4. What skills do you want to highlight?**
All of my technical skills, organized into five groups: Languages; Cloud & DevOps; Distributed Systems & Data; Frameworks & APIs; Concepts.

**5. What projects or work will you showcase?**
My cloud projects: (1) Distributed Redis Cluster with Failover Testing on AWS EC2 — the featured case study; (2) Hadoop & Spark Cluster on AWS EC2; (3) Containerized Flask App with Docker & Kubernetes.

**6. How will you describe yourself in a short professional bio?**
"Computer science student at Queens College (CUNY) focused on cloud infrastructure and distributed systems — deploying, breaking, and benchmarking real clusters on AWS." The About section expands this with my operations/tech-support work experience and Girls Who Code mentorship.

**7. What pages will your site include?**
Home (hero), About, Technical Skills, Work Experience, Projects, Education, Contact — implemented as anchored sections of a single page with a sticky nav.

**8. What is your career goal or desired role?**
Software Engineer (internships and new-grad roles), with an interest in cloud infrastructure and distributed systems.

**9. What technologies or tools do you have experience with?** *(from resume)*
- **Languages:** Java, C++, Python, JavaScript, SQL, HTML, CSS
- **Cloud & DevOps:** AWS (EC2, S3, Lambda, VPC, Security Groups), Docker, Kubernetes (Minikube, kubectl), Git, GitHub, Linux/Unix CLI
- **Distributed Systems & Data:** Hadoop (HDFS, YARN), Apache Spark, PySpark, Redis Cluster, replication, failover, sharding
- **Frameworks & APIs:** Flask, Node.js, React, Discord.js, OpenAI API, Google Sheets API, REST APIs, JSON
- **Concepts:** OOP, data structures & algorithms, API integration, automation, performance benchmarking, HIPAA-aware data handling

**10. What achievements or experiences are worth highlighting?** *(from resume)*
- Benchmarked a 6-node Redis Cluster at **4,023 ops/sec, 2.47 ms avg latency (P95 6.22 ms / P99 9.86 ms) over 241K operations**, with live failover testing.
- Cut manual data-entry time **40%** with Python + Google Sheets API automation at Shah's Halal Food; sustained **99%+ uptime** across POS/delivery integrations; reduced order-processing latency **15%**.
- Prototyped an LLM-powered medication FAQ assistant (OpenAI API) in a HIPAA-aware pharmacy environment.
- Google × Bastas Software Engineering Program (G-SWEP), Fall 2024; Google CS Summer Institute (CSSI), 2022.
- Girls Who Code Mentor Corps — mentored 20+ K–12 students (2022–2025).

**11. What call-to-action should visitors take?**
Primary: **View projects** (proof of skills) and **Download resume (PDF)**. Secondary: **Send a message** via the contact form, or connect on GitHub/LinkedIn. These CTAs appear in the hero, the nav, and the contact section.

**12. Will you include a resume? In what format?**
Yes — `assets/Nadia_Islam_Resume.pdf`, downloadable from the nav, hero, and contact section.

**13. What social or professional links will you include?**
GitHub ([github.com/isla6645](https://github.com/isla6645)) and LinkedIn ([linkedin.com/in/nadia-islam100](https://www.linkedin.com/in/nadia-islam100/)).

## 4. Information Organization

Single page, six anchored sections, ordered by what a recruiter needs first:

```
Home (hero: identity + CTA + interactive cluster)
 └─ About            — who I am, what I'm looking for
 └─ Technical Skills — grouped skill cards, scannable chips
 └─ Work Experience  — reverse-chronological timeline with metrics
 └─ Projects         — featured case study + two project cards
 └─ Education        — degree, coursework, honors, activities
 └─ Contact          — form + email + social links + resume
```

The sticky nav mirrors this exactly, and the currently visible section is highlighted in the nav so visitors always know where they are.

## 5. Visual Design

### Part 2: Design — Questions & Answers

**1. What overall style will best represent you?**
Professional with a strong engineering identity — a dark, card-driven "ops dashboard" look with monospace accents and terminal-style readouts, so the site reads as a developer portfolio at first glance.

**2. What color scheme will you use and why?**
A dark "ops dashboard" palette, since my featured work is cluster deployment and failover testing — this is literally how infrastructure monitoring tools look:

| Token | Hex | Role |
|---|---|---|
| Background | `#0C1310` | Page background (dark spruce console) |
| Panel | `#101B15` | Tinted alternate sections |
| Card | `#14211A` | Cards and containers |
| Text | `#E7EFE9` | Primary text |
| Muted | `#A3B7AA` | Secondary text |
| Mint | `#4CC38A` | Primary accent — "healthy node" green |
| Amber | `#E0A33E` | Failover/warning accent, used sparingly |

Green = healthy, amber = failover is exactly how monitoring dashboards speak, so the palette encodes the subject of my work. All text/background pairs meet WCAG AA contrast (text on background ≈ 15:1, mint on background ≈ 8:1).

**3. What fonts will you use for headings and body text?**
- **Headings:** Bricolage Grotesque — characterful, modern, still professional.
- **Body:** Public Sans — highly readable at 17px base.
- **Utility:** IBM Plex Mono — metrics, labels, section eyebrows, and the cluster status line, echoing a terminal.
All loaded from Google Fonts with `display=swap`.

**4. How will your design reflect your personality or field?**
The signature element is an **interactive 6-node Redis cluster diagram** in the hero — 3 masters, 3 replicas, ambient "gossip" pulses — with a button that kills a master and animates the replica's promotion. It's a working metaphor for my actual featured project. Monospace `// section` eyebrows, a blinking terminal cursor after my name, glowing timeline "node" markers, a faint blueprint grid behind the hero, and a terminal-style benchmark panel carry the same engineering voice through the whole page.

**5. What layout will your homepage follow?**
A two-column hero (oversized name + role + CTAs on the left, cluster diagram card on the right) over a faint blueprint grid, followed by full-width stacked sections alternating between the base and tinted dark backgrounds, all constrained to a 1080px content column.

**6. How will you organize project sections visually?**
The Redis project is a **featured case study**: a 2-column card with the narrative on the left and a dark terminal-style benchmark readout (throughput, latency, P95/P99, total ops) on the right, outlined in the accent color. The other two cloud projects follow as full-width cards with a consistent structure: title → stack/date line in mono → description → repo link.

**7. Will the site be mobile-friendly? How will you ensure responsiveness?**
Yes. A fluid 1080px max-width layout, `clamp()`-based type scaling, and CSS Grid columns that collapse to a single column at 860px and 700px breakpoints. On small screens the nav becomes a hamburger menu (animated to an ✕, with correct `aria-expanded` state). Tested at 360px, 768px, and 1280px widths.

**8. What visual hierarchy will guide visitors?**
Name dominates the first screen (uppercase display type up to 5.5rem) with the role line directly beneath; short section titles are preceded by small mono eyebrows; metrics are set in bright mint mono so numbers pop out of body text; primary CTAs are solid mint buttons while secondary actions are ghost buttons; cards brighten their borders on hover to signal interactivity.

**9. How will consistency be maintained across pages/sections?**
A single design-token system (`:root` CSS variables for color, type, radius, max-width) drives everything. Every section uses the same eyebrow → short title → content pattern, the same card and chip components, and the same button styles. One stylesheet, no per-section overrides.

**10. How will accessibility be considered?**
- Semantic landmarks (`header/nav/main/section/footer`), one `h1`, ordered heading levels.
- Skip-to-content link; visible `:focus-visible` outlines on all interactive elements.
- WCAG AA color contrast throughout; 17px base font with 1.65 line height.
- `aria-expanded`/`aria-controls` on the menu toggle; `aria-live` regions for the cluster status and form status; inline errors with `role="alert"`.
- `prefers-reduced-motion` disables the gossip pulses, scroll reveals, and smooth scrolling.
- Form inputs all have real `<label>`s.

**11. Will you use icons, images, or illustrations? Why?**
No stock imagery or icon fonts — the only "illustration" is the hand-built SVG cluster diagram, because it demonstrates a real project rather than decorating the page. Arrows (↗ ↓ ↑) are typographic. This keeps the page fast (no image requests) and the focus on content.

**12. What portfolio websites inspired your design?**
My existing portfolio ([isla6645.github.io/landingwebsite](https://isla6645.github.io/landingwebsite/)) was the starting point — this redesign keeps its single-page structure and section set but upgrades it with a real design system, my newest cloud projects, quantified benchmarks, and richer interactivity.

### Wireframe

```
┌────────────────────────────────────────────────────────────┐
│ ● nadia.islam   About Skills Experience Projects … [Resume]│  ← sticky nav
├────────────────────────────────────────────────────────────┤
│  // eyebrow                          ┌───────────────────┐ │
│  NADIA ISLAM BUILDS                  │   ◉ ─── ◎        │ │
│  clusters, not just code.            │  ◎  cluster  ◉   │ │  ← hero
│  lede paragraph…                     │   ◉ ─── ◎        │ │
│  [View projects] [Download resume]   │ ● cluster ok…     │ │
│  GitHub ↗  LinkedIn ↗                │ [$ kill a master] │ │
│                                      └───────────────────┘ │
├────────────────────────────────────────────────────────────┤
│  // about                                                  │
│  Big statement title                                       │
│  ┌ paragraph column ──────────────┐  ┌ facts sidebar ───┐ │
│  └────────────────────────────────┘  └──────────────────┘ │
├──────────────────── (tinted) ──────────────────────────────┤
│  // technical skills                                       │
│  ┌ Languages ┐ ┌ Cloud & DevOps ┐                          │
│  ┌ Dist. Sys ┐ ┌ Frameworks    ┐                           │
│  ┌ Concepts (full width) ──────┐                           │
├────────────────────────────────────────────────────────────┤
│  // work experience                                        │
│  ●─ Role, company, dates                                   │
│  │   · bullet with highlighted metric                      │
│  ●─ Role …                                                 │
├──────────────────── (tinted) ──────────────────────────────┤
│  // projects                                               │
│  ┌ FEATURED: Redis cluster ───────┬─ dark benchmark box ─┐ │
│  └────────────────────────────────┴──────────────────────┘ │
│  ┌ Hadoop & Spark ───────────────────────────────────────┐ │
│  ┌ Docker & Kubernetes ──────────────────────────────────┐ │
├────────────────────────────────────────────────────────────┤
│  // education — degree card: coursework / honors / activities
├──────────────────── (tinted) ──────────────────────────────┤
│  // contact — lede, [Name][Email] [Message] [Send]         │
│  GitHub ↗  LinkedIn ↗  Resume ↓                            │
├────────────────────────────────────────────────────────────┤
│  © 2026 Nadia Islam                        ↑ back to top   │
└────────────────────────────────────────────────────────────┘

Mobile (≤700px): nav collapses to hamburger; every grid becomes
a single column; hero stacks text above the cluster diagram.
```

## 6. Interaction / Functionality

### Part 3: Interactivity — Questions & Answers

**1. What interactive elements will your site include?**
A sticky navigation menu with active-section highlighting and a mobile hamburger toggle; smooth-scroll anchor links; primary/ghost/mono buttons with hover and press states; an interactive cluster-failover simulation in the hero; a validated contact form; a back-to-top link; hover states on cards, chips, and links.

**2. Will your site include a contact form? How will it work?**
Yes. All three fields are validated client-side (required checks, email-format regex, minimum message length) with inline error messages and focus management. On valid submit, the form POSTs JSON to a **Formspree** endpoint via `fetch()` (a free static-site form backend) and shows "Sending… / Message sent / error" states. Until a Formspree endpoint is configured in `js/script.js`, the form gracefully falls back to opening the visitor's mail app with a pre-filled `mailto:` draft — so it works on GitHub Pages either way.

**3. What JavaScript features will you implement?**
- Dynamic SVG generation and a multi-step timed animation for the cluster failover simulation.
- `IntersectionObserver` (twice): active-nav highlighting and one-time scroll-reveal of sections.
- Mobile menu toggle with ARIA state management.
- Form validation on `blur`/`input`/`submit`, plus async `fetch()` submission with `try/catch` error handling.
- A `prefers-reduced-motion` media-query check that disables all non-essential animation.
All in vanilla JS (no frameworks or libraries), organized as commented IIFE modules in `js/script.js`.

**4. How will users receive feedback from interactions?**
- Cluster simulation: the status line (an `aria-live` region) narrates each stage — node down → replica promoting → failover complete — while node colors change (green → gray → amber → green) and the indicator light turns amber.
- Form: invalid fields get red borders and inline error text (`role="alert"`); the submit button disables during sending; a status line announces success or failure.
- Navigation: the current section's link is underlined and tinted green; the hamburger animates into an ✕ when open.
- Buttons/links compress slightly on press and change shade on hover.

**5. How does interactivity improve the user experience?**
The failover simulation turns my strongest resume line into something a recruiter can *experience* in five seconds — it demonstrates the project instead of describing it. Active-nav highlighting and smooth scrolling keep visitors oriented on a long single page. Inline validation catches mistakes before submission instead of after. And because every effect respects `prefers-reduced-motion` and degrades gracefully without JS (all content is plain HTML), the interactivity is additive, never a barrier.

## 7. Technical Overview

- **Stack:** hand-written HTML5, CSS3 (custom properties, Grid, Flexbox, `clamp()`), vanilla ES6+ JavaScript. No frameworks, build step, or dependencies.
- **Files:**
  ```
  /
  ├── index.html          — all content and structure
  ├── css/styles.css      — design tokens + all styling, commented by section
  ├── js/script.js        — 4 commented modules (cluster, nav, scroll, form)
  ├── assets/Nadia_Islam_Resume.pdf
  └── README.md           — this design document
  ```
- **Hosting:** GitHub Pages (static, HTTPS, free).
- **Fonts:** Google Fonts (Bricolage Grotesque, Public Sans, IBM Plex Mono).
- **Form backend:** Formspree (optional; `mailto:` fallback built in).

### Deploying to GitHub Pages

1. Create a new public repo (e.g. `portfolio`) at github.com/isla6645.
2. Upload these files (or `git init`, `git add .`, `git commit`, `git push`).
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
4. The site publishes at `https://isla6645.github.io/portfolio/` within a minute or two.
5. Optional: create a free form at [formspree.io](https://formspree.io), paste the endpoint into `FORMSPREE_ENDPOINT` at the top of `js/script.js`, commit, and the contact form sends real messages.

## 8. Timeline / Project Milestones

| Week | Milestone |
|---|---|
| 1 | Requirements: answered all content/design/interactivity questions; gathered resume content; audited existing site |
| 1 | Design: palette, type pairing, wireframe, component inventory |
| 2 | Build: HTML structure and content for all six sections |
| 2 | Build: stylesheet (tokens → components → responsive breakpoints) |
| 3 | Build: JavaScript (cluster simulation, nav, scroll behavior, form validation) |
| 3 | QA: accessibility pass (contrast, keyboard, screen-reader labels, reduced motion), mobile testing at 360/768/1280px |
| 4 | Deploy to GitHub Pages, connect Formspree, submit repo + URL on Brightspace |

## 9. External Resources

- [Google Fonts](https://fonts.google.com/) — Bricolage Grotesque, Public Sans, IBM Plex Mono
- [Formspree](https://formspree.io/) — static-site contact form backend (optional)
- [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) — hosting
- [MDN Web Docs](https://developer.mozilla.org/) — `IntersectionObserver`, SVG DOM, `prefers-reduced-motion` references
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — verifying WCAG AA color contrast
- [Redis Cluster specification](https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/) — reference for the failover simulation's accuracy
- Previous portfolio (design starting point): [isla6645.github.io/landingwebsite](https://isla6645.github.io/landingwebsite/)

---

© 2026 Nadia Islam. All code in this repository is original and hand-written for this project.
