---
title: Bachelors Night Out
company: Independent project
role: Unity Game Developer
timeframe: AI and Games Jam 2021
stack: [Unity, Goal-Oriented Action Planning, Behavior Trees, Finite State Machines, Blender]
summary: AI-driven RPG vertical slice with ten NPC types whose goals and behaviours react to changing game events.
outcome: Built an extensible NPC system intended to scale beyond the jam prototype.
order: 15
---

NPC behavior that's scripted per-scene stops scaling past a handful of characters — ten NPC types that each need to react to the same set of world events only stays manageable if the AI system is built on goals and preconditions instead of hand-authored scripts per character.

## What I built

Bachelors Night Out, an AI-driven RPG vertical slice submitted to AI and Games Jam 2021: ten NPC types react to changing events in the environment, including a companion NPC whose actions are tied to nearly every event in the game. Built on goal-oriented action planning layered with behavior trees and finite state machines, so NPC goals and preconditions combine into different behavior sequences depending on world state, supporting replayable scenarios rather than one fixed script. The underlying system was designed to extend past the five-minute jam slice into a larger cast.

## Screenshots

<div class="shot-grid">
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/bachelors-night-out-shot-1-800.avif 800w, /images/projects/bachelors-night-out-shot-1-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/bachelors-night-out-shot-1-800.webp 800w, /images/projects/bachelors-night-out-shot-1-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/bachelors-night-out-shot-1-800.webp" alt="Third-person street scene with a Welcome to the Single City banner, minimap and cash counter" loading="lazy" width="1600" height="900" />
    </picture>
    <figcaption>Arriving in the city hub - cash, stamina and minimap drive the loop.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/bachelors-night-out-shot-2-800.avif 800w, /images/projects/bachelors-night-out-shot-2-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/bachelors-night-out-shot-2-800.webp 800w, /images/projects/bachelors-night-out-shot-2-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/bachelors-night-out-shot-2-800.webp" alt="Club interior with NPCs seated on sofas and a bar counter" loading="lazy" width="1600" height="900" />
    </picture>
    <figcaption>Club interior populated with reactive NPCs.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/bachelors-night-out-shot-3-800.avif 800w, /images/projects/bachelors-night-out-shot-3-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/bachelors-night-out-shot-3-800.webp 800w, /images/projects/bachelors-night-out-shot-3-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/bachelors-night-out-shot-3-800.webp" alt="Two bouncers outside a bar with a Pay $200 To Enter prompt" loading="lazy" width="1600" height="900" />
    </picture>
    <figcaption>Bouncer NPCs gate locations behind an in-game cost.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/bachelors-night-out-shot-4-800.avif 800w, /images/projects/bachelors-night-out-shot-4-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/bachelors-night-out-shot-4-800.webp 800w, /images/projects/bachelors-night-out-shot-4-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/bachelors-night-out-shot-4-800.webp" alt="Street scene at dusk with a Start Fight prompt above a waypoint marker" loading="lazy" width="1600" height="900" />
    </picture>
    <figcaption>Goal-driven NPC encounters trigger from world waypoints.</figcaption>
  </figure>
</div>

<p class="shot-credit">Screenshots from the akaashgarg.com portfolio.</p>

## Outcome

A ten-NPC vertical slice shipped for the jam, built on an extensible goal-oriented AI system intended to scale well beyond the prototype's five-minute scope.
