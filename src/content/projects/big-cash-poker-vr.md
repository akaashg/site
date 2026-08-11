---
title: Big Cash Poker VR
company: Witzeal Technologies
role: Lead VR Developer, Multiplayer VR Platform
timeframe: Mar 2023 - Jul 2023
stack: [Unity 3D, Meta Quest, Real-time networking, Java backend integration, Agile/Scrum]
summary: Multiplayer Meta Quest VR extension of Big Cash Poker, a mobile platform with a 50M+ user base - shipped in a 3-month window.
outcome: Sub-100ms latency, zero critical post-launch defects, and a 25% delivery-time reduction in 3 months.
availability: Shipped and launched publicly. No longer distributed - the client retired the VR title after launch.
order: 4
---

Big Cash Poker had a 50M+ user mobile base and a proprietary Java backend built for mobile traffic rather than real-time XR. Extending it into VR required a Unity client to meet tighter latency requirements and ship in three months.

## What I built

I led end-to-end Unity development of the multiplayer Meta Quest experience: real-time multi-user game logic, networked interactions, and 3D rendering on standalone hardware. The core engineering work was integrating the Unity VR client with the Java backend and optimizing state synchronization for concurrent sessions. I also ran device testing and frame-rate profiling on Quest 2 and Quest Pro, and established the Agile sprint and code-review process used by the team.

<figure class="shot-figure">
  <picture>
    <source type="image/avif" srcset="/images/projects/big-cash-poker-vr-card-800.avif 800w, /images/projects/big-cash-poker-vr-card-1600.avif 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <source type="image/webp" srcset="/images/projects/big-cash-poker-vr-card-800.webp 800w, /images/projects/big-cash-poker-vr-card-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <img src="/images/projects/big-cash-poker-vr-card-800.webp" alt="System diagram of a multiplayer VR poker table: six seated client nodes reconciled against a shared authoritative table state" loading="lazy" width="1600" height="900" />
  </picture>
  <figcaption>The client retired the title after launch, so no build remains to capture - this shows the networked table architecture instead.</figcaption>
</figure>

## Outcome

Shipped in 3 months with sub-100ms multiplayer latency and zero critical post-launch defects for a 50M+ user platform. The Agile and code-review process reduced delivery time by 25%.
