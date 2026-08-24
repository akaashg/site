---
title: xrapp.dev — Enterprise VR Training SaaS
company: 2 Dude Studios
role: Lead XR Engineer
timeframe: In development
stack: [Unity 3D, PERN stack, PostgreSQL, Node.js, React, Photon, Meta Quest]
summary: Enterprise VR training platform for multiplayer, instructor-led sessions with digital-twin simulations and AI-powered training analytics.
outcome: Targets manufacturing, logistics, and healthcare training, with LMS/HRMS integration and offline deployment for remote sites.
order: 6
---

Enterprise training tools tend to fail in one of two ways: the content is a slide deck
nobody retains, or the immersive pilot never connects to the systems an L&D team
already runs. xrapp.dev is built to close both gaps.

## What it does

xrapp.dev lets an organisation train teams inside immersive environments rather than
in front of slides, and then reports on what actually happened in the session:

- **Multiplayer and instructor-led VR sessions** — a trainer can run a cohort through a
  scenario together, in the same virtual space.
- **Digital twin simulations** of real facilities and equipment, so the rehearsal matches
  the site the trainee will work on.
- **SOP, safety, and hazard training modules** — branching scenarios with decision points
  rather than linear walkthroughs.
- **AI-powered analytics** covering completion rates, skill gaps, and compliance reporting.
- **LMS / HRMS integration**, plus offline deployment for remote sites with no reliable
  connectivity.

## How it is built

The headset client is Unity, targeting standalone Meta Quest hardware so a deployment
needs no tethered PC per trainee. The platform side — accounts, cohort management,
content assignment, and the analytics surface — runs on the PERN stack:
PostgreSQL, Express, React, and Node.js. Session networking reuses the same multiplayer architecture behind the
free-roam arena work: server-authoritative state with client-side prediction, so a full
cohort stays synchronized.

<figure class="shot-figure">
  <picture>
    <source type="image/avif" srcset="/images/projects/xrapp-dev-card-800.avif 800w, /images/projects/xrapp-dev-card-1600.avif 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <source type="image/webp" srcset="/images/projects/xrapp-dev-card-800.webp 800w, /images/projects/xrapp-dev-card-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <img src="/images/projects/xrapp-dev-card-800.webp" alt="System diagram of an instructor-led VR training session: six headset nodes around one authoritative session hub, beside an analytics bar chart" loading="lazy" width="1600" height="900" />
  </picture>
  <figcaption>In active development and not yet publicly released - this shows the session architecture rather than the product UI.</figcaption>
</figure>

## Status

In active development, targeting the manufacturing, logistics, and healthcare training
markets. Live at [xrapp.dev](https://xrapp.dev/).
