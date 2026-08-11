---
title: Captive
company: Independent project
role: Unity Game Developer
timeframe: Level Up Circle Beginner Jam #1
stack: [Unity, Event-Driven Architecture, Finite State Machines, Blender, Asset Store]
summary: Roguelite stealth-puzzle game about escaping a factory by linking hot and cold generators while avoiding guards.
outcome: Uses reusable event-driven puzzle systems and raycast-based enemy field of vision.
order: 14
---

Stealth games depend on guard behavior actually reading as fair — if line-of-sight is faked or guard states don't telegraph clearly, players stop trusting the stealth system and start treating detection as random.

## What I built

Captive, a roguelite stealth-puzzle game built for Level Up Circle Beginner Jam #1: players escape a sequence of factory rooms by connecting hot and cold generators, which reshapes each room's environment, while avoiding patrolling guards. Puzzle elements run on an event-driven architecture so new room mechanics can be added without touching existing ones. Guard behavior runs on a finite state machine — idle, patrol, chase, kill — and vision is computed from physics raycasts rather than a simplified distance check, so obstacles genuinely block line of sight instead of guards seeing through walls.

## Screenshots

<div class="shot-grid">
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/captive-shot-1-800.avif 800w, /images/projects/captive-shot-1-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/captive-shot-1-800.webp 800w, /images/projects/captive-shot-1-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/captive-shot-1-800.webp" alt="Captive title screen with a character crouching beside a glowing generator and Play and Exit buttons" loading="lazy" width="1557" height="875" />
    </picture>
    <figcaption>Title screen - hot and cold generators are the core puzzle object.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/captive-shot-2-800.avif 800w, /images/projects/captive-shot-2-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/captive-shot-2-800.webp 800w, /images/projects/captive-shot-2-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/captive-shot-2-800.webp" alt="Overhead view of a guard search light sweeping a tiled factory floor toward the player" loading="lazy" width="1280" height="720" />
    </picture>
    <figcaption>A guard raycast field of view sweeping the factory floor.</figcaption>
  </figure>
</div>

<p class="shot-credit">Screenshots from the akaashgarg.com portfolio.</p>

## Outcome

A complete roguelite stealth-puzzle loop shipped for the jam, with raycast-based guard vision and a modular event-driven puzzle system built to extend past the jam prototype.
