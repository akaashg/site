---
title: Big Cash Poker VR
company: Witzeal Technologies
role: Lead VR Developer, Multiplayer VR Platform
timeframe: Mar 2023 – Jul 2023
stack: [Unity 3D, Meta Quest, Real-time networking, Java backend integration, Agile/Scrum]
summary: Multiplayer Meta Quest VR extension of Big Cash Poker, a mobile platform with a 50M+ user base — shipped in a 3-month window.
outcome: Sub-100ms latency for concurrent multi-user sessions, zero critical post-launch defects, delivered inside a 3-month window.
order: 2
---

Big Cash Poker had a 50M+ user mobile base and a proprietary Java backend built for mobile traffic — not for real-time XR. Extending it into VR meant a Unity client had to talk to that existing backend under much tighter latency requirements than a turn-based mobile game demands, and it had to ship in three months.

## What I built

I led end-to-end Unity 3D development of the multiplayer Meta Quest VR experience: real-time multi-user game logic, networked interactions, and 3D environment rendering on standalone hardware. The core engineering problem was the networking layer — integrating the Unity VR client with the existing Java backend and optimizing state synchronization to hit sub-100ms latency for concurrent multi-user sessions on Quest. I ran continuous device testing and frame-rate profiling across Quest 2 and Quest Pro to catch cross-platform integration issues before they shipped, and set up the Agile sprint structure and code review process the team used for the rest of the build.

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/big-cash-poker-vr-400.avif 400w, /images/projects/big-cash-poker-vr-800.avif 800w, /images/projects/big-cash-poker-vr-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/big-cash-poker-vr-400.webp 400w, /images/projects/big-cash-poker-vr-800.webp 800w, /images/projects/big-cash-poker-vr-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/big-cash-poker-vr-400.svg 400w, /images/projects/big-cash-poker-vr-800.svg 800w, /images/projects/big-cash-poker-vr-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/big-cash-poker-vr-1.webp" alt="Big Cash Poker VR — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with gameplay screenshot or networking diagram.</figcaption>
</figure>

## Outcome

The product shipped inside the 3-month window with zero critical post-launch defects, on a platform where "regulated" and "50M+ existing users" leave very little room for a bad launch. The Agile/code-review restructuring cut project delivery time by 25%.

TODO: what would you do differently on the backend integration in hindsight? Worth one line for the case study.
