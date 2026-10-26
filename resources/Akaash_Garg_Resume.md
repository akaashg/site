# AKAASH GARG

**Full-Stack Systems Architect** · Real-Time & Distributed Systems · Unity · Photon · Node · PostgreSQL · 17+ yrs Software

Bangalore, India · Available for remote work worldwide
akaash.garg@gmail.com · linkedin.com/in/akaashgarg · akaashgarg.com

---

## PROFESSIONAL SUMMARY

Full-stack systems architect with 17+ years shipping software — 12 years of web, mobile, and backend delivery as a studio founder, then six years architecting real-time distributed systems where the client runs on a fixed frame budget. Designs the whole stack: server-authoritative state models with client-side prediction and reconciliation (Photon Fusion, Mirror), PostgreSQL schemas and Node/Express APIs, offline-first ingestion that survives unreliable connectivity, and Unity clients held inside a 13.9ms budget on standalone hardware. Founded 2 Dude Studios and leads a 6-person team across three concurrent products: a free-roam location-based VR arena, an enterprise training platform on the PERN stack, and *Ruins of the Forgotten*, an open-world survival game with a public Steam demo. Previously architected the integration between a Unity VR client and a proprietary Java backend at sub-100ms for a 50M+ user IP, and led a 5-person team on a photogrammetry-driven multi-user AR platform. Combines architecture ownership and client accountability with daily hands-on engineering.

---

## PROFESSIONAL EXPERIENCE

### Founder & Lead XR Developer · 2 Dude Studios
*Jul 2023 – Present · Remote*
*XR studio I founded — VR/AR/MR applications for enterprise training, simulation, and games. Steam-published developer.*

- **Founded the studio and lead a 6-person team** — 2 junior developers, a designer, a QA tester, and a business developer — owning architecture decisions, code review, sprint planning, hiring, and client delivery while remaining hands-on across gameplay, networking, and rendering every week.
- **Built *Ruins of the Forgotten*, an open-world survival game with a playable public demo on Steam** *(Early Access launch Q3 2026)* — owning gameplay systems, procedurally generated island terrain, day/night simulation, wildlife AI behaviour, animation state machines, custom shaders, and the full Steamworks pipeline through build, depot, store page, and age-rating submission. → store.steampowered.com/app/2726410
- **Engineered a networked enemy AI system on Photon** — server-authoritative behaviour trees and state machines with client-side prediction and interpolation, keeping AI perception, pathfinding, and combat decisions synchronized across clients without desync or duplicated damage events.
- **Architected *Aura VR*, free-roam location-based VR arena software for up to 8 co-located players** — a single authoritative host owning all session state while headsets contribute only input; a printed floor mat as the shared coordinate frame, so nothing spatial is networked and only poses already in a common frame replicate; depth-sensor floor correction; and offline-first session telemetry into Supabase behind a React operator dashboard, with disk queueing, backoff, and crash-journal reconciliation. Built to a 72fps standalone budget on Quest 3S, in development ahead of its first venue deployment.
- **Delivered a gamified corporate compliance training product in VR** — converted regulatory curricula into scenario-based modules with branching decision paths and performance scoring, replacing slide-based training with rehearsable scenarios.
- Delivered 15+ XR applications across Meta Quest, HoloLens, HTC Vive, and Varjo — training simulators, multiplayer experiences, and AR visualization tools, applying passthrough MR, hand tracking, and room-scale interaction models where the use case called for it.
- Optimized rendering across URP and HDRP to hit Quest's 90fps frame budget — draw-call batching, LOD systems, texture atlasing, object pooling to control GC pressure, and custom HLSL/ShaderGraph shaders for realistic materials, lighting, and transparency on mobile XR hardware.

### Lead VR Developer — Multiplayer VR Platform · Witzeal Technologies
*Mar 2023 – Jul 2023 · Contract, fixed-scope delivery · Remote*
*Multiplayer Meta Quest VR extension of Big Cash Poker — real-time multi-user gaming on a 50M+ user IP.*

- Led end-to-end Unity development of a multiplayer Meta Quest experience extending a 50M+ user mobile platform — real-time multi-user game logic, networked interactions, and 3D environment rendering.
- Engineered the networking layer integrating the Unity VR client with a proprietary Java backend — sub-100ms latency for concurrent multi-user sessions through optimized state synchronization and authoritative server reconciliation.
- Established sprint structure and code review process — shipping a regulated multiplayer VR product with zero critical post-launch defects inside a 3-month window, 25% ahead of baseline delivery estimates.

### Lead Unity Developer — CollaboratAR · CodeXAR
*Jan 2022 – Dec 2022 · Remote*
*Enterprise AR platform for real-time multi-user 3D collaboration and remote design review.*

- Led a 5-person team building **CollaboratAR**, a real-time multi-user AR collaboration platform in Unity with AR Foundation, Mirror Networking, Master Server Toolkit, and Draco mesh compression — letting businesses present highly detailed 3D clones of physical products on web, in AR, and in shared virtual space to shorten enterprise purchasing decisions.
- Built the **photogrammetry-to-AR asset pipeline** — converting scanned physical products into optimized runtime 3D models, retaining 8K source texture detail on mobile AR hardware through shader optimization, texture atlasing, Draco mesh compression, and LOD systems with no visible quality loss.
- Implemented physics-based 3D interactions, real-time material rendering, and lighting — delivering photorealistic product visualization accurate enough for remote design sign-off.
- Reduced client physical sampling and travel costs by 40% by delivering the platform on schedule — ROI validated by client procurement metrics.
- Coordinated cross-platform deployment across iOS and Android — build pipelines, certification cycles, and post-launch QA across a distributed user base.

### Founder & Lead Developer · Cyber Cerebs
*2009 – 2021 · Delhi, India*
*Full-service digital studio — full-stack product development and delivery.*

- Grew a solo practice into an 8+ person studio delivering 50+ digital products across hospitality, sports, travel, and fleet services for clients in India and overseas.
- **Pivoted the studio into interactive development — game development from 2019, XR from 2020** — self-directing the transition from web and full-stack delivery into Unity, shipping mobile and PC titles across racing, roguelite, RPG, simulation, and infinite-runner genres before moving to XR full time.
- Owned technical hiring, client engagement, concurrent delivery timelines, and P&L across a multi-vertical portfolio over 12 years.

---

## SHIPPED PRODUCTS

**Ruins of the Forgotten: A Wild Survival** · Open-world survival, PC — public Steam demo live, Early Access Q3 2026 · [store.steampowered.com/app/2726410](https://store.steampowered.com/app/2726410/Ruins_of_the_Forgotten__A_Wild_Survival/)
**Aura VR** · LBE free-roam VR arena software, first venue deployment in build — Photon Fusion, 72fps standalone, 8-player co-location
**CollaboratAR** · Photogrammetry-driven multi-user AR product collaboration — Mirror Networking, 8K texture fidelity on mobile
**Big Cash Poker VR** · Meta Quest multiplayer on a 50M+ user IP — 3-month delivery
**xrapp.dev** · Multi-user VR team training SaaS for logistics, manufacturing, and safety drills — Unity + PERN stack · [xrapp.dev](https://xrapp.dev/)
**Full portfolio** · 15+ shipped AR/VR and game titles — [akaashgarg.com](https://akaashgarg.com/portfolio/)

---

## TECHNICAL SKILLS

**Architecture:** Distributed state and authority models, service boundaries, coordinate and reference frames, relational schema design, offline-first sync with retry and reconciliation, failure and recovery design, multi-tenant models, architecture decision records
**Multiplayer & Networked Systems:** Photon Fusion, Photon PUN, Mirror Networking, server-authoritative architecture, client-side prediction & interpolation, state synchronization & reconciliation, latency compensation, dedicated server hosting
**Backend & Full-Stack:** PERN stack (PostgreSQL, Express, React, Node.js), REST API design, authentication & session management, Supabase, Python/Django, CI/CD and edge deployment (GitHub Actions, Cloudflare Workers)
**Engines & XR SDKs:** Unity 3D, OpenXR, AR Foundation, XR Interaction Toolkit, Meta XR SDK, MRTK, ARKit, ARCore
**Graphics & Performance:** URP, HDRP, HLSL, ShaderGraph, custom shaders, GPU profiling, draw-call batching, LOD systems, texture atlasing, Draco mesh compression, object pooling & GC optimization, 72fps standalone budgets (13.9ms)
**Gameplay & AI:** Behaviour trees, finite state machines, NavMesh pathfinding, procedural generation, animation state machines, physics-based interaction, character controllers
**3D Pipeline:** Photogrammetry capture-to-runtime workflows, mesh decimation & retopology, UV/texture optimization, asset streaming
**Mixed Reality & Interaction:** Passthrough MR, spatial anchors, hand tracking, room-scale and co-located multi-user setup
**Platforms:** Meta Quest 2/3/Pro/3S, HoloLens, HTC Vive, Varjo, PC (Steam/Steamworks), iOS, Android
**Languages & Tools:** C#, JavaScript/TypeScript, Python, HLSL, SQL, Git, Unity Profiler, RenderDoc, Blender, Jira, Agile/Scrum
