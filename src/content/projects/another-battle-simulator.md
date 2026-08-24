---
title: "ABS: Another Battle Simulator"
company: Independent project
role: Unity Game Developer
timeframe: Shipped - live on Google Play
stack: [Unity, C#, Event-Driven Architecture, Android, Blender]
summary: Single-player battle simulator for recruiting troops, building formations across varied terrain, and watching armies clash.
outcome: Live on Google Play, rebuilt on IL2CPP/ARM64 with 16 KB page-size support to meet current Android requirements.
liveUrl: https://play.google.com/store/apps/details?id=com.AkaashGarg.ABSAnotherBattleSimulator
liveLabel: Get it on Google Play
availability: Live on Google Play. Rated 3+. Last updated December 2025.
order: 14
---

Formation-based battle simulators live or die on whether building an army actually feels legible — if formation planning doesn't visibly change how a fight plays out, "watch armies clash" is just a spectacle with no strategy underneath it.

## What I built

ABS: Another Battle Simulator — a single-player Unity battle simulator where players recruit troops and heroes, arrange a battle formation, and watch two armies clash across varied terrain, from sandy coastline to hidden forest and abandoned ruins. Built with an event-driven architecture so unit recruitment, formation placement, and combat resolution stay decoupled and easy to extend with new unit types, using Blender for 3D asset work alongside Asset Store content. The design goal was accessible formation planning — a player should be able to read why a formation choice won or lost a fight, not just watch a black-box simulation.

## Screenshots

<div class="shot-grid">
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/another-battle-simulator-shot-2-800.avif 800w, /images/projects/another-battle-simulator-shot-2-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/another-battle-simulator-shot-2-800.webp 800w, /images/projects/another-battle-simulator-shot-2-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/another-battle-simulator-shot-2-800.webp" alt="Formation planning grid overlaid on the battlefield with unit cost buttons and a troop budget" loading="lazy" width="1600" height="900" />
    </picture>
    <figcaption>Formation planning: place units on the grid against a fixed budget.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/another-battle-simulator-shot-3-800.avif 800w, /images/projects/another-battle-simulator-shot-3-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/another-battle-simulator-shot-3-800.webp 800w, /images/projects/another-battle-simulator-shot-3-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/another-battle-simulator-shot-3-800.webp" alt="Third-person view of low-poly troops on green hills with a virtual joystick" loading="lazy" width="1600" height="900" />
    </picture>
    <figcaption>The same battle in 3D view.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/another-battle-simulator-shot-1-800.avif 800w, /images/projects/another-battle-simulator-shot-1-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/another-battle-simulator-shot-1-800.webp 800w, /images/projects/another-battle-simulator-shot-1-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/another-battle-simulator-shot-1-800.webp" alt="Level select dialog for the Forest region with one stage unlocked and one locked" loading="lazy" width="1600" height="900" />
    </picture>
    <figcaption>Stage select across terrain regions.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/another-battle-simulator-shot-4-800.avif 800w, /images/projects/another-battle-simulator-shot-4-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/another-battle-simulator-shot-4-800.webp 800w, /images/projects/another-battle-simulator-shot-4-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/another-battle-simulator-shot-4-800.webp" alt="Main menu with campaign, options and how-to-play buttons over armies clashing" loading="lazy" width="1600" height="900" />
    </picture>
    <figcaption>Main menu over a battle in progress.</figcaption>
  </figure>
</div>

<p class="shot-credit">Screenshots from the Google Play listing.</p>

## Outcome

A complete formation-and-combat loop where army composition and placement are the primary strategic lever, built on an event-driven architecture designed to take new unit types without a rewrite. Shipped to Google Play and still maintained - the latest pass rebuilt it on IL2CPP with an ARM64 target and 16 KB page-size support to stay compliant with current Android requirements.
