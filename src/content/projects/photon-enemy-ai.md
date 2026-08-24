---
title: Photon Enemy AI — Networked Unity AI Framework
company: 2 Dude Studios
role: Lead XR Engineer
timeframe: In development - Unity Asset Store release pending
stack: [Unity 3D, C#, Photon Fusion 2, ScriptableObjects, Finite State Machines, UI Toolkit]
summary: Networked enemy AI framework for Unity - a Photon Fusion 2 state machine over a Fusion-agnostic ability core that also runs single-player with no networking in the scene.
outcome: The core assembly compiles against an empty reference list, so the same ability layer serves networked and single-player projects without a port.
availability: Pre-release. Packaged for the Unity Asset Store; listing pending.
order: 2
---

Enemy AI written directly against a networking layer is stuck there. The valuable part is the behaviour — sensing, patrol, pursuit, attack — but the moment that behaviour holds concrete references to networked types, it only ever runs in a networked game, and every reuse becomes a port.

## What I built

A layered enemy AI framework for Unity, networked with Photon Fusion 2. Behaviour lives in a Fusion-agnostic ability layer — sense, patrol, rush, attack, injured, health — that reaches the state machine only through a plain-C# blackboard and two events. The networked layer owns state authority, health sync, and spawn/despawn, and nothing below it is allowed to know Fusion exists.

That boundary is enforced by the compiler rather than by convention: the core assembly builds against an empty reference list, so a Fusion type cannot enter it without a build error. A standalone runtime references the core alone and runs the full patrol, pursue, and attack loop with no networking present at all.

Around 70% of tunable behaviour lives in ScriptableObjects rather than code — stats, senses, combat, healing, patrol — composed per enemy, so archetypes get configured instead of written.

## Archetypes and tooling

Melee, ranged, and cover-seeking shooter archetypes; a wave system with per-wave enemy composition; and health-threshold boss phases that swap abilities at runtime. Detection is a graded meter rather than a binary flag, and enemies call nearby allies to alert, flee under configurable triggers, and ragdoll on death.

The editor side ships a UI Toolkit configurator that builds an enemy prefab from an archetype, a scene validator, range and field-of-view gizmos, and a demo-scene scaffolder.

## Outcome

Feature-complete and play-verified in-editor across both the networked and standalone runtimes, with documentation written and the package made self-contained. What remains is a clean-project import test and the store listing itself.
