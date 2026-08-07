---
title: Captive
company: Independent project
role: Unity Game Developer
timeframe: Level Up Circle Beginner Jam #1
stack: [Unity, Event-Driven Architecture, Finite State Machines, Blender, Asset Store]
summary: Roguelite stealth-puzzle game about escaping a factory by linking hot and cold generators while avoiding guards.
outcome: Uses reusable event-driven puzzle systems and raycast-based enemy field of vision.
order: 13
---

Stealth games depend on guard behavior actually reading as fair — if line-of-sight is faked or guard states don't telegraph clearly, players stop trusting the stealth system and start treating detection as random.

## What I built

Captive, a roguelite stealth-puzzle game built for Level Up Circle Beginner Jam #1: players escape a sequence of factory rooms by connecting hot and cold generators, which reshapes each room's environment, while avoiding patrolling guards. Puzzle elements run on an event-driven architecture so new room mechanics can be added without touching existing ones. Guard behavior runs on a finite state machine — idle, patrol, chase, kill — and vision is computed from physics raycasts rather than a simplified distance check, so obstacles genuinely block line of sight instead of guards seeing through walls.

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/captive-400.avif 400w, /images/projects/captive-800.avif 800w, /images/projects/captive-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/captive-400.webp 400w, /images/projects/captive-800.webp 800w, /images/projects/captive-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/captive-400.svg 400w, /images/projects/captive-800.svg 800w, /images/projects/captive-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/captive-1.webp" alt="Captive — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with a screenshot of a factory room puzzle.</figcaption>
</figure>

## Outcome

A complete roguelite stealth-puzzle loop shipped for the jam, with raycast-based guard vision and a modular event-driven puzzle system built to extend past the jam prototype.
