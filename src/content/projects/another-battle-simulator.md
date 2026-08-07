---
title: Another Battle Simulator
company: Independent project
role: Unity Game Developer
timeframe: Portfolio project
stack: [Unity, Event-Driven Architecture, Blender, Asset Store]
summary: Single-player battle simulator for building troop formations and observing armies clash.
outcome: Focuses on accessible formation planning and army composition.
order: 12
---

Formation-based battle simulators live or die on whether building an army actually feels legible — if formation planning doesn't visibly change how a fight plays out, "watch armies clash" is just a spectacle with no strategy underneath it.

## What I built

Another Battle Simulator — a single-player Unity battle simulator where players recruit troops and heroes, arrange a battle formation, and watch two armies clash. Built with an event-driven architecture so unit recruitment, formation placement, and combat resolution stay decoupled and easy to extend with new unit types, using Blender for 3D asset work alongside Asset Store content. The design goal was accessible formation planning — a player should be able to read why a formation choice won or lost a fight, not just watch a black-box simulation.

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/another-battle-simulator-400.avif 400w, /images/projects/another-battle-simulator-800.avif 800w, /images/projects/another-battle-simulator-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/another-battle-simulator-400.webp 400w, /images/projects/another-battle-simulator-800.webp 800w, /images/projects/another-battle-simulator-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/another-battle-simulator-400.svg 400w, /images/projects/another-battle-simulator-800.svg 800w, /images/projects/another-battle-simulator-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/another-battle-simulator-1.webp" alt="Another Battle Simulator — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with a screenshot of a battle in progress.</figcaption>
</figure>

## Outcome

A complete formation-and-combat loop where army composition and placement are the primary strategic lever, built on an event-driven architecture designed to take new unit types without a rewrite.
