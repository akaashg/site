---
title: Bachelors Night Out
company: Independent project
role: Unity Game Developer
timeframe: AI and Games Jam 2021
stack: [Unity, Goal-Oriented Action Planning, Behavior Trees, Finite State Machines, Blender]
summary: AI-driven RPG vertical slice with ten NPC types whose goals and behaviours react to changing game events.
outcome: Built an extensible NPC system intended to scale beyond the jam prototype.
order: 14
---

NPC behavior that's scripted per-scene stops scaling past a handful of characters — ten NPC types that each need to react to the same set of world events only stays manageable if the AI system is built on goals and preconditions instead of hand-authored scripts per character.

## What I built

Bachelors Night Out, an AI-driven RPG vertical slice submitted to AI and Games Jam 2021: ten NPC types react to changing events in the environment, including a companion NPC whose actions are tied to nearly every event in the game. Built on goal-oriented action planning layered with behavior trees and finite state machines, so NPC goals and preconditions combine into different behavior sequences depending on world state, supporting replayable scenarios rather than one fixed script. The underlying system was designed to extend past the five-minute jam slice into a larger cast.

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/bachelors-night-out-400.avif 400w, /images/projects/bachelors-night-out-800.avif 800w, /images/projects/bachelors-night-out-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/bachelors-night-out-400.webp 400w, /images/projects/bachelors-night-out-800.webp 800w, /images/projects/bachelors-night-out-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/bachelors-night-out-400.svg 400w, /images/projects/bachelors-night-out-800.svg 800w, /images/projects/bachelors-night-out-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/bachelors-night-out-1.webp" alt="Bachelors Night Out — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with a screenshot of an NPC interaction.</figcaption>
</figure>

## Outcome

A ten-NPC vertical slice shipped for the jam, built on an extensible goal-oriented AI system intended to scale well beyond the prototype's five-minute scope.
