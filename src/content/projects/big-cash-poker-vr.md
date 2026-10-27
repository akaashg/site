---
title: Big Cash Poker VR
company: Witzeal Technologies
role: Lead VR Developer, Multiplayer VR Platform
timeframe: Mar 2023 - Jul 2023
stack: [Unity 3D, Meta Quest, Real-time networking, Java backend integration, Agile/Scrum]
summary: Meta Quest VR extension of a 50M+ user poker platform, built in three months against a proprietary Java backend that could not be changed - so the headset became a view, never an authority.
outcome: Sub-100ms across the service boundary, zero critical post-launch defects on a money-handling platform, and delivery 25% inside a fixed three-month window.
availability: Shipped and launched publicly. No longer distributed - the client retired the VR title after launch.
order: 4
---

The backend was not mine to change, and that was the whole design.

Big Cash Poker was a live platform with 50M+ registered users, real money moving through it, and a proprietary Java backend built for mobile request patterns rather than real-time XR. The brief was a multiplayer Meta Quest version in three months. Any architecture that required touching the server was not an architecture, it was a proposal that would never ship.

## What I built

A multiplayer Quest client in Unity: the table, the seats, the cards and chips, the hand flow, and the networked presence of everyone else sitting at it. I led development end to end, ran device testing and frame-rate profiling on Quest 2 and Quest Pro, and set up the sprint and code-review process the team worked to.

<figure class="shot-figure">
  <picture>
    <source type="image/avif" srcset="/images/projects/big-cash-poker-vr-card-800.avif 800w, /images/projects/big-cash-poker-vr-card-1600.avif 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <source type="image/webp" srcset="/images/projects/big-cash-poker-vr-card-800.webp 800w, /images/projects/big-cash-poker-vr-card-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <img src="/images/projects/big-cash-poker-vr-card-800.webp" alt="System diagram of a multiplayer VR poker table: six seated client nodes reconciled against a shared authoritative table state" loading="lazy" width="1600" height="900" />
  </picture>
  <figcaption>The client retired the title after launch, so no build remains to capture - this shows the networked table architecture instead.</figcaption>
</figure>

## The headset is never an authority

On a platform handling real money, the question of where game state lives is settled before anyone opens an engine. The existing backend already held it, already had the audit trail, and already satisfied whatever the platform's compliance posture required. Introducing a second source of truth inside a Unity client would have been the single most expensive mistake available.

So the VR client owns nothing that matters. It renders the table it is told about and sends intents — sit, fold, raise — and the server's answer is the only one that counts. Every piece of state that represents money or outcome arrives from the backend and is never computed locally, even when computing it locally would have been faster and easier.

That decision cost the obvious thing: the client cannot resolve a hand on its own, so every meaningful action is a round trip.

## Where the latency budget actually went

Because the server could not be modified, the entire sub-100ms budget had to be found on the client side of the boundary and in how the two spoke to each other. A backend shaped for mobile polling is not shaped for a room of people watching the same table in real time.

The work split into two kinds of state, and the split is the point:

- **Things that only affect what you see** — picking up your cards, turning them, moving chips, your own head and hands — resolve locally and immediately. No round trip, because nothing about them is contestable.
- **Things that change the table** — a bet, a fold, a pot resolving — go to the server and reconcile when it answers.

Keeping those apart is what made the experience feel immediate despite every real decision being remote. The felt latency of VR poker is dominated by whether your own hands respond, not by whether the pot updates 60ms later.

## Three months, and the part that was not code

A fixed window on a money-handling product makes process an architectural concern rather than an administrative one. Sprint structure and mandatory code review were introduced at the start, not because the team needed supervising, but because "zero critical defects" is a property you build in continuously and cannot test in at the end.

It shipped 25% inside the baseline estimate with no critical post-launch defects.

## Outcome

Launched publicly, then retired by the client after launch — a business decision about the VR market rather than a technical one, and the honest end to the story.

The reusable part was the boundary itself. Treating the headset as a view over an authority that already exists, and splitting state by whether it is contestable, is the same shape I now use for [instructor-led training sessions](/projects/xrapp-dev/) and for a [venue-hosted VR arena](/projects/free-roam-vr-arena/) — different domains, same question answered the same way.
