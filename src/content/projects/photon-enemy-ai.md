---
title: Photon Enemy AI
company: 2 Dude Studios
role: Lead XR Engineer
timeframe: Shipped - v1.0.0
stack: [Unity 6, C#, Photon Fusion 2, ScriptableObjects, Finite State Machines, AI Navigation, UI Toolkit]
summary: Finite-state-machine enemy AI for Unity 6 that ships two runtimes from one codebase - networked on Photon Fusion 2, or fully standalone for single-player with no networking in the scene.
outcome: Released at v1.0.0 with public documentation. The core assembly builds against an empty reference list, so the same behaviour serves networked and single-player projects without a port.
liveUrl: https://2-dude-studios.github.io/Enemy-AI-Photon-Fusion-Docs/
liveLabel: Read the documentation
availability: Version 1.0.0 released; Unity Asset Store listing awaiting approval. Unity 6000.0 LTS or newer; Photon Fusion 2 and its FSM addon are needed only for the networked runtime.
order: 2
---

Enemy AI written directly against a networking layer is stuck there. The valuable part is the behaviour — sensing, patrol, pursuit, attack — but the moment that behaviour holds concrete references to networked types, it only ever runs in a networked game, and every reuse becomes a port.

<figure class="clip">
  <button type="button" class="yt" data-youtube="HTWkh8gFQiQ" aria-label="Play the Enemy AI overview video on YouTube">
    <picture>
      <source type="image/avif" srcset="/images/projects/photon-enemy-ai-video-800.avif 800w, /images/projects/photon-enemy-ai-video-1600.avif 1600w" sizes="(max-width: 900px) 100vw, 760px" />
      <source type="image/webp" srcset="/images/projects/photon-enemy-ai-video-800.webp 800w, /images/projects/photon-enemy-ai-video-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px" />
      <img src="/images/projects/photon-enemy-ai-video-800.webp" alt="Title card reading Enemy AI, single-player plus Photon Fusion 2, over three enemies charging through a test scene" loading="lazy" width="1280" height="720" />
    </picture>
    <span class="yt-play" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
    </span>
  </button>
  <figcaption>Overview — the package running single-player and in a Photon Fusion 2 session. Nothing loads from YouTube until you press play.</figcaption>
</figure>

## What I built

A finite-state-machine enemy AI package for Unity 6, built for Photon Fusion 2 host-mode multiplayer and shipping two runtimes from one codebase. `EnemyAI.Core` holds the behaviour — senses, patrol, chase, attack, injured and healing abilities, the blackboard, and the ScriptableObject configuration layer — and depends on nothing. `EnemyAI.Standalone` runs that same AI in a single-player scene with no networking present. `EnemyAI.Fusion` adds the networked enemy, state machine, spawning and target management.

The split is enforced by the compiler rather than by convention: Core builds against an empty reference list, so a Fusion type cannot enter it without a build error. The networked assemblies detect Fusion and the FSM addon and enable themselves — there are no scripting defines to set, and until both are installed the package simply runs single-player, with no errors and no missing scripts.

## Behaviour

Enemies notice you gradually rather than instantly: awareness rises while a target is visible and decays when it isn't, crossing one threshold to investigate and a second to commit. They hear footsteps too, attenuated by blocker layers. Beyond that — patrol by waypoint or random area, melee with an optional jump-lunge, hitscan ranged fire with kiting and cover-seeking, an alert bus that raises nearby allies on detection or on an ally's death, fleeing triggered by low health or being outnumbered, regeneration between fights, abilities swapped while the enemy is still alive, and ragdoll on death simulated per peer so it costs no bandwidth.

All of it is configured through ScriptableObjects and an editor window. Five archetypes ship as presets with sample scenes in both runtimes: a melee baseline, Stealth (narrow cone, slow to notice and quick to forget), Shooter (holds its distance and falls back to cover), Waves (horde fodder that calls for help and never retreats), and Boss (health-threshold phases that swap abilities at runtime).

## Editor tooling

The tooling targets the failures that are silent rather than loud. A setup window checks the project for the layers, tags and settings the AI needs and fixes them at a button press, never unprompted. The Enemy Configurator turns an archetype plus some tuning into ScriptableObjects and a ready-to-use prefab in one click — each enemy in its own folder, re-opened and updated in place. Scene Doctor checks an open scene for the mistakes that make an enemy do nothing at all, such as no NavMesh, no target provider, an animator on the wrong object or no cover geometry, with a jump-to-culprit button on every finding. A demo-scene builder puts a playable test scene around any enemy prefab with the NavMesh already baked.

<figure class="clip">
  <video
    data-autoplay
    muted
    loop
    playsinline
    preload="metadata"
    poster="/images/projects/photon-enemy-ai-configurator-poster.webp"
    width="1280"
    height="662"
    aria-label="Screen capture of the Enemy Configurator: the Sense tab's detection meter, hearing and call-for-help fields being tuned before the enemy is generated"
  >
    <source src="/videos/photon-enemy-ai-configurator.mp4" type="video/mp4" />
  </video>
  <figcaption>The Configurator's Sense tab — detection rise and decay, hearing, and call-for-help radius — tuned before the enemy is generated.</figcaption>
</figure>

<figure class="shot-figure">
  <picture>
    <source type="image/avif" srcset="/images/projects/photon-enemy-ai-shot-2-800.avif 800w, /images/projects/photon-enemy-ai-shot-2-1600.avif 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <source type="image/webp" srcset="/images/projects/photon-enemy-ai-shot-2-800.webp 800w, /images/projects/photon-enemy-ai-shot-2-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <img src="/images/projects/photon-enemy-ai-shot-2-800.webp" alt="Unity project window showing a generated EnemyAI folder: a sample scene, an enemy prefab, and separate Combat, Healing, Injured, Patrol, Sense and Stats ScriptableObjects" loading="lazy" width="1598" height="826" />
  </picture>
  <figcaption>One click produces the scene, the prefab, and a ScriptableObject per ability — each enemy in its own folder.</figcaption>
</figure>

## Outcome

Released as version 1.0.0 with public documentation and [video walkthroughs](https://2-dude-studios.github.io/Enemy-AI-Photon-Fusion-Docs/#/videos/), validated against Photon Fusion 2.0.12 and 2.1.3 and the Fusion FSM addon 2.0.5. Enemy authority comes from Fusion itself and players become targets as soon as their target component spawns, so the package drops into a project's own launcher instead of requiring the demo bootstrapper.
