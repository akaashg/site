---
title: Free-Roam Multiplayer VR Arena Game
company: 2 Dude Studios
role: Lead XR Engineer
timeframe: 2023-Present
stack: [Unity 3D, C#, Photon Fusion, Meta XR SDK, Meta Quest]
summary: Location-based multiplayer VR arena where players move freely through shared physical space while staying synchronized in the virtual one, running standalone at 90fps.
outcome: Live in 3 commercial venues. Maintains 90fps on standalone Quest with physics, avatar synchronization, and shared-space tracking.
availability: Deployed in 3 commercial VR arenas. Operator-run - not publicly distributed.
order: 1
---

Free-roam multiplayer VR raises the synchronization bar: players move together through real physical space while every interaction and avatar position must stay coherent in the virtual world.

## What I built

I built location-based entertainment (LBE) arena software for Meta Quest, networked with Photon Fusion, for a client operating VR gaming arenas across India. It supports physics-based interactions, multi-user spatial collaboration, and real-time avatar synchronization at 90fps on standalone hardware, without a PC tether or external tracking rig.

Beyond the player-facing experience, the platform includes multi-headset co-location so several players share one physical space with a common coordinate origin, plus operator session-management tooling for the staff running each venue.

This work is part of 15+ XR applications I have shipped across Meta Quest, HoloLens, HTC Vive, and Varjo.

<figure class="shot-figure">
  <picture>
    <source type="image/avif" srcset="/images/projects/free-roam-vr-arena-card-800.avif 800w, /images/projects/free-roam-vr-arena-card-1600.avif 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <source type="image/webp" srcset="/images/projects/free-roam-vr-arena-card-800.webp 800w, /images/projects/free-roam-vr-arena-card-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <img src="/images/projects/free-roam-vr-arena-card-800.webp" alt="System diagram of a free-roam VR arena: five co-located player nodes inside a tracked floor grid, each linked to the others" loading="lazy" width="1600" height="900" />
  </picture>
  <figcaption>Operator-run arena software with no public build to capture, so this is a diagram of the co-located session rather than a screenshot.</figcaption>
</figure>

## Outcome

Live in 3 commercial arenas. Maintained 90fps on standalone Quest while combining 3 real-time systems: physics interactions, avatar synchronization, and shared-space tracking - without a PC tether or external tracking rig.
