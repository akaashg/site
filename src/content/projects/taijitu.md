---
title: Taijitu — Infinite Runner
company: Independent project
role: Unity Game Developer
timeframe: Game jam project
stack: [Unity, Obi Rope API, Blender, Photoshop, GarageBand]
summary: Single-player or couch co-op infinite runner where two light-and-dark ninjas are physically linked by a breakable rope.
outcome: Features a custom tension-based rope system built from roughly 100 connected segments.
order: 15
---

A shared-rope co-op mechanic only works if the rope actually behaves like rope — sags under its own weight, resists sudden pulls, and can snap under enough tension — otherwise "physically linked" is just a fixed-distance constraint with a rope texture drawn over it.

## What I built

Taijitu, an infinite runner inspired by the Yin-Yang symbol: one or two players control light and dark ninjas physically linked by a rope, dodging obstacles and fighting a skeleton army in single-player or couch co-op. The core system is a physics-based rope built on the Obi Rope API — roughly 100 connected segments produce real sag, tension, and a yield point where the rope breaks under enough force, so the connection between players actively shapes how they move and cooperate rather than acting as an invisible tether. The game is playable on [itch.io](https://akaashgarg.itch.io/taijitu).

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/taijitu-400.avif 400w, /images/projects/taijitu-800.avif 800w, /images/projects/taijitu-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/taijitu-400.webp 400w, /images/projects/taijitu-800.webp 800w, /images/projects/taijitu-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/taijitu-400.svg 400w, /images/projects/taijitu-800.svg 800w, /images/projects/taijitu-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/taijitu-1.webp" alt="Taijitu — Infinite Runner — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with gameplay footage from itch.io.</figcaption>
</figure>

## Outcome

A shipped, playable co-op runner built around a from-scratch tension-based rope system connecting two players in real time.
