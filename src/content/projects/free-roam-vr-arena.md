---
title: Free-Roam Multiplayer VR Arena
company: 2 Dude Studios
role: Senior XR Engineer
timeframe: 2023–Present
stack: [Unity 3D, C#, Photon Fusion, Meta XR SDK, Meta Quest]
summary: Location-based multiplayer VR arena where players move freely through shared physical space while staying synchronized in the virtual one, running standalone at 90fps.
outcome: Shipped physics-based, multi-user spatial collaboration with real-time avatar sync — standalone on Quest, no PC tether, no fixed play-space lock.
order: 1
---

Most multiplayer VR either locks players to a small, fixed play area or breaks presence the moment avatar positions drift out of sync. A free-roam arena removes the fixed boundary — players walk a real physical space together — which raises the bar on synchronization: every position and interaction has to reconcile across clients in real time, on hardware that's also rendering the scene standalone.

## What I built

A free-roam multiplayer VR arena on Meta Quest, networked with Photon Fusion. The system handles physics-based interactions, multi-user spatial collaboration, and real-time avatar synchronization — running natively at 90fps on standalone Quest hardware, with no PC or external tracking rig in the loop. This is one of 15+ XR applications I've shipped in this role across Meta Quest, HoloLens, HTC Vive, and Varjo, spanning training simulators, multiplayer experiences, and AR visualization tools.

Holding 90fps standalone on Quest while running physics and networked avatar sync is the actual constraint — there's no headroom to spend on anything that doesn't earn its frame budget. That's the discipline I apply across 2 Dude Studios' XR builds generally: LOD systems, texture atlasing, and GPU-friendly shader work to keep draw calls and GPU time inside Quest's budget without visibly downgrading the scene.

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/free-roam-multiplayer-vr-arena-400.avif 400w, /images/projects/free-roam-multiplayer-vr-arena-800.avif 800w, /images/projects/free-roam-multiplayer-vr-arena-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/free-roam-multiplayer-vr-arena-400.webp 400w, /images/projects/free-roam-multiplayer-vr-arena-800.webp 800w, /images/projects/free-roam-multiplayer-vr-arena-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/free-roam-multiplayer-vr-arena-400.svg 400w, /images/projects/free-roam-multiplayer-vr-arena-800.svg 800w, /images/projects/free-roam-multiplayer-vr-arena-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/free-roam-multiplayer-vr-arena-1.webp" alt="Free-Roam Multiplayer VR Arena — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with gameplay clip or architecture diagram.</figcaption>
</figure>

## Outcome

Shipped and running standalone at 90fps with multi-user spatial tracking intact.

TODO: add a concrete outcome — deployment status, install count, client name (if public), or a specific technical lesson from this build — before this goes live.
