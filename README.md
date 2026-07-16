# Nadia Islam — Personal Portfolio Website

**Live site:** `https://isla6645.github.io/portfolio/`
**Repo:** `https://github.com/isla6645/portfolio`

A personal portfolio built from scratch with plain HTML, CSS, and JavaScript, hosted on GitHub Pages. It presents my skills, cloud projects, work experience, and education to recruiters.

## 1. Project Overview

This site replaces my earlier landing page ([isla6645.github.io/landingwebsite](https://isla6645.github.io/landingwebsite/)) with a stronger design, my newest cloud projects, and more interactivity. It is a single page with a sticky nav and six sections: About, Technical Skills, Work Experience, Projects, Education, and Contact.

## 2. Target Audience

Employers, mainly recruiters and hiring managers screening candidates for software engineering internships and new grad roles. Since recruiters skim, the site leads with who I am and what I do, highlights concrete numbers over adjectives, and keeps two clear actions visible everywhere: view projects and download resume.

## 3. Content Strategy

### Part 1: Content Questions & Answers

**1. What is your full name as you want it displayed professionally?**

Nadia Islam.

**2. What is the purpose of your portfolio website?**

To present myself to recruiters.

**3. Who is the target audience (employers, clients, peers, etc.)?**

Employers.

**4. What skills do you want to highlight?**

All of my technical skills, grouped into Languages, Cloud & DevOps, Distributed Systems & Data, Frameworks & APIs, and Concepts.

**5. What projects or work will you showcase?**

My cloud projects: a distributed Redis cluster with failover testing on AWS (the featured one), a Hadoop and Spark cluster on AWS, and a Flask app containerized with Docker and Kubernetes.

**6. How will you describe yourself in a short professional bio?**

CS student at Queens College (CUNY) focused on cloud infrastructure and distributed systems. The About section adds my work experience and Girls Who Code mentorship.

**7. What pages will your site include (Home, About, Projects, Contact, etc.)?**

Home, About, Technical Skills, Work Experience, Projects, Education, and Contact, built as sections of one page with a sticky nav.

**8. What is your career goal or desired role?**

Software Engineer, with an interest in cloud and distributed systems.

**9. What technologies or tools do you have experience with?**

Java, C++, Python, JavaScript, SQL, HTML, CSS. AWS (EC2, S3, Lambda, VPC), Docker, Kubernetes, Git, Linux. Hadoop, Spark, PySpark, Redis Cluster. Flask, Node.js, React, Discord.js, OpenAI API, Google Sheets API, REST. Core concepts: OOP, data structures and algorithms, automation, benchmarking.

**10. What achievements or experiences are worth highlighting?**

Benchmarked a 6 node Redis cluster at 4,023 ops/sec with 2.47 ms average latency over 241K operations, including live failover testing. Cut manual data entry time 40% with Python automation at work and kept delivery integrations above 99% uptime. Prototyped an AI medication FAQ assistant at a pharmacy. Completed Google G-SWEP (2024) and Google CSSI (2022). Mentored 20+ students through Girls Who Code.

**11. What call-to-action should visitors take (contact you, view projects, download resume)?**

View my projects and download my resume. They can also send a message through the contact form or connect on GitHub and LinkedIn.

**12. Will you include a resume? In what format?**

Yes, as a PDF at `assets/Nadia_Islam_Resume.pdf`.

**13. What social or professional links will you include (GitHub, LinkedIn, etc.)?**

GitHub ([github.com/isla6645](https://github.com/isla6645)) and LinkedIn ([linkedin.com/in/nadia-islam100](https://www.linkedin.com/in/nadia-islam100/)).

## 4. Information Organization

One page, six sections, ordered by what a recruiter needs first: hero, About, Technical Skills, Work Experience, Projects, Education, Contact. The sticky nav mirrors this order and highlights whichever section is currently on screen.

## 5. Visual Design

### Part 2: Design Questions & Answers

**1. What overall style will best represent you (minimalist, creative, professional, etc.)?**

Professional with an engineering feel. The site uses a dark, card based "ops dashboard" look so it reads as a developer portfolio right away.

**2. What color scheme will you use and why?**

A dark palette inspired by infrastructure monitoring dashboards, since my featured work is cluster deployment and failover testing. Dark green background (`#0C1310`), light text (`#E7EFE9`), mint green accent (`#4CC38A`) for healthy states, and amber (`#E0A33E`) for the failover warning state. All color pairs pass WCAG AA contrast.

**3. What fonts will you use for headings and body text?**

Bricolage Grotesque for headings, Public Sans for body text, and IBM Plex Mono for metrics and labels. All from Google Fonts.

**4. How will your design reflect your personality or field?**

The hero has an interactive 6 node Redis cluster diagram with a button that kills a master node and shows the replica getting promoted, which is a working demo of my actual featured project. Monospace labels, a blinking terminal cursor after my name, and a terminal style benchmark panel keep the engineering voice consistent.

**5. What layout will your homepage follow?**

A two column hero with my name, role, and buttons on the left and the cluster diagram on the right, followed by stacked full width sections.

**6. How will you organize project sections visually?**

The Redis project is a featured case study with the write up on one side and a benchmark readout (throughput, latency, total operations) on the other. The other two projects follow as consistent cards: title, tech stack, description, repo link.

**7. Will the site be mobile-friendly? How will you ensure responsiveness?**

Yes. The layout uses CSS Grid with breakpoints at 860px and 700px where columns collapse to one, type scales with `clamp()`, and the nav becomes a hamburger menu on small screens. Tested at 360px, 768px, and 1280px.

**8. What visual hierarchy will guide visitors?**

My name is the largest thing on the first screen. Section titles are short with small mono labels above them. Metrics appear in bright mint so numbers stand out. Primary buttons are solid, secondary ones are outlined.

**9. How will consistency be maintained across pages?**

One set of CSS variables (colors, fonts, spacing) drives everything, and every section uses the same label, title, and card patterns from a single stylesheet.

**10. How will accessibility be considered (contrast, font size, readability)?**

Semantic HTML landmarks, a skip link, visible keyboard focus, WCAG AA contrast, real labels on all form fields, ARIA states on the menu and live regions for status messages, and `prefers-reduced-motion` support that turns off animations.

**11. Will you use icons, images, or illustrations? Why?**

No stock images or icon packs. The only visual is the hand built SVG cluster diagram, because it demonstrates a real project instead of decorating the page. This also keeps the site fast.

**12. What portfolio websites inspired your design?**

My existing portfolio at [isla6645.github.io/landingwebsite](https://isla6645.github.io/landingwebsite/). This redesign keeps its single page structure but upgrades the design, projects, and interactivity.

### Wireframe

```
┌────────────────────────────────────────────────────────────┐
│ ● nadia.islam   About Skills Experience Projects  [Resume] │  sticky nav
├────────────────────────────────────────────────────────────┤
│  // hi, i'm                          ┌───────────────────┐ │
│  NADIA                               │   ◉ ─── ◎        │ │
│  ISLAM_                              │  ◎  cluster  ◉   │ │  hero
│  Software Engineer · Cloud           │   ◉ ─── ◎        │ │
│  [View projects] [Download resume]   │ ● cluster ok…     │ │
│  GitHub ↗  LinkedIn ↗                │ [$ kill a master] │ │
│                                      └───────────────────┘ │
├────────────────────────────────────────────────────────────┤
│  // about                                                  │
│  ┌ short paragraph ───────────────┐  ┌ facts card ──────┐ │
├────────────────────────────────────────────────────────────┤
│  // technical skills                                       │
│  ┌ Languages ┐ ┌ Cloud & DevOps ┐                          │
│  ┌ Dist. Sys ┐ ┌ Frameworks    ┐                           │
│  ┌ Concepts (full width) ──────┐                           │
├────────────────────────────────────────────────────────────┤
│  // work experience                                        │
│  ●─ Role, company, dates + bullets with metrics            │
├────────────────────────────────────────────────────────────┤
│  // projects                                               │
│  ┌ FEATURED: Redis cluster ──────┬─ benchmark box ───────┐ │
│  ┌ Hadoop & Spark ───────────────────────────────────────┐ │
│  ┌ Docker & Kubernetes ──────────────────────────────────┐ │
├────────────────────────────────────────────────────────────┤
│  // education — degree card                                │
├────────────────────────────────────────────────────────────┤
│  // contact — form, email, links, resume                   │
├────────────────────────────────────────────────────────────┤
│  © 2026 Nadia Islam                        ↑ back to top   │
└────────────────────────────────────────────────────────────┘

Mobile: nav collapses to a hamburger and every grid becomes one column.
```

## 6. Interaction / Functionality

### Part 3: Interactivity Questions & Answers

**1. What interactive elements will your site include (navigation menus, buttons, forms)?**

A sticky nav that highlights the current section, a mobile hamburger menu, smooth scrolling, hover and press states on buttons and cards, the cluster failover simulation, a validated contact form, and a back to top link.

**2. Will your site include a contact form? How will it work?**

Yes. All fields are validated in the browser with inline error messages. On submit the form sends the message through Formspree, a free form service for static sites. Until a Formspree endpoint is added in `js/script.js`, it opens the visitor's email app with the message prefilled instead, so it works either way on GitHub Pages.

**3. What JavaScript features will you implement?**

Dynamic SVG drawing and a timed animation for the failover simulation, IntersectionObserver for nav highlighting and scroll reveal, the mobile menu toggle, form validation with async submission and error handling, and a reduced motion check. All plain JavaScript with no libraries, organized into commented modules.

**4. How will users receive feedback from interactions?**

The cluster simulation narrates each stage in a status line while node colors change. Invalid form fields get red borders and error text, and a status line reports success or failure. The nav underlines the current section and the hamburger animates into an X when open.

**5. How does interactivity improve the user experience?**

The failover demo lets a recruiter experience my strongest project in a few seconds instead of just reading about it. Nav highlighting keeps visitors oriented on a long page, and inline validation catches form mistakes early. Everything degrades gracefully, so the content still works without JavaScript or animations.

## 7. Technical Overview

Plain HTML5, CSS3, and vanilla JavaScript with no frameworks or build step.

```
/
├── index.html          all content and structure
├── css/styles.css      design tokens and all styling
├── js/script.js        cluster demo, nav, scroll, form modules
├── assets/Nadia_Islam_Resume.pdf
└── README.md           this design document
```

Hosted on GitHub Pages. Fonts from Google Fonts. Contact form through Formspree (optional, with a mailto fallback built in).

**To deploy:** push to a public repo, then in Settings > Pages set the source to the main branch root folder. The site publishes at `https://isla6645.github.io/portfolio/` within a couple minutes.

## 8. Timeline / Project Milestones

| Week | Milestone |
|---|---|
| 1 | Answered all planning questions, gathered resume content, reviewed my old site, made the wireframe and picked colors and fonts |
| 2 | Built the HTML structure and the stylesheet |
| 3 | Built the JavaScript, then tested accessibility and mobile layouts |
| 4 | Deployed to GitHub Pages and submitted on Brightspace |

## 9. External Resources

- [Google Fonts](https://fonts.google.com/) for Bricolage Grotesque, Public Sans, and IBM Plex Mono
- [Formspree](https://formspree.io/) for the contact form
- [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) for hosting
- [MDN Web Docs](https://developer.mozilla.org/) for IntersectionObserver, SVG, and reduced motion references
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) for checking color contrast
- [Redis Cluster docs](https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/) as reference for the failover demo
- My previous portfolio: [isla6645.github.io/landingwebsite](https://isla6645.github.io/landingwebsite/)

---

© 2026 Nadia Islam. All code in this repository is original.
