---
title: LBE VR — Free-Roam Multiplayer Arena
company: 2 Dude Studios
role: Lead XR Engineer
timeframe: Mar 2026 - Present
stack: [Unity 6, C#, Photon Fusion 2, OpenXR, Meta Quest 3S, AR Foundation, Supabase]
summary: Free-roam VR shooter for location-based entertainment venues - up to 8 players share one printed floor mat on standalone Quest, with the venue operator's PC as the authoritative host.
outcome: The printed mat is the coordinate system - each headset calibrates to it, so nothing spatial is networked and Fusion replicates only poses already in a shared frame.
availability: In development ahead of a first venue deployment in Hyderabad. Operator-run - not publicly distributed.
order: 1
---

Free-roam VR puts several people in one real room with their eyes covered. If each headset's idea of where the floor and walls are drifts even slightly from the real ones, players walk into the furniture and into each other. The hard problem is not rendering the arena — it is getting every headset to agree on where the room actually is.

## What I built

A free-roam multiplayer VR shooter for location-based entertainment venues. Up to eight players walk a printed 7.2 × 12.2 m floor mat on standalone Quest 3S headsets, while venue staff run the whole session from a single Windows app: choosing the mode and match length, watching through spectator cameras, and resetting for the next group.

Two modes ship — team versus team, and a wave mode where the squad fights networked AI. Everything is networked with Photon Fusion 2 in host mode, and the operator PC is that host: the only state authority in the session. The headsets own nothing. Each one streams its rig pose as network input and requests changes by RPC, so every hit, score and state change is decided in one place.

<figure class="shot-figure">
  <picture>
    <source type="image/avif" srcset="/images/projects/free-roam-vr-arena-card-800.avif 800w, /images/projects/free-roam-vr-arena-card-1600.avif 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <source type="image/webp" srcset="/images/projects/free-roam-vr-arena-card-800.webp 800w, /images/projects/free-roam-vr-arena-card-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <img src="/images/projects/free-roam-vr-arena-card-800.webp" alt="System diagram of a free-roam VR arena: eight co-located player squares in two facing rows, each sighting a calibration marker at the centre of a tracked floor mat" loading="lazy" width="1600" height="900" />
  </picture>
  <figcaption>Operator-run arena software with no public build to capture, so this is a schematic of a co-located session rather than a screenshot.</figcaption>
</figure>

## The mat is the coordinate system

The decision the rest of the system rests on: the printed mat, not the network, defines the shared space. Its centre is world origin. Every headset aligns its own tracking space to the mat during a staff-run calibration, which means nothing spatial ever has to be synchronised — Fusion only replicates poses that are already in a common frame.

Calibration is two steps per headset. Sight the centre marker along the line printed on your square to capture heading, then confirm against a cyan ghost of the mat's border — a confirmation gated on real head movement, so a bad solve can't be accepted by standing still. The rows calibrate in turns, one side and then the other, so nobody walks through anyone else's sightline to the marker.

## Finding the real floor

The floor was the most expensive bug in the project. Quest takes its floor height from the headset's own room setup, and the venue's was 0.7 m low because that setup had been done with the headset sitting on a desk. One wrong number produced three symptoms that looked unrelated: the floor sat too low, the mat's printed markings vanished beneath it, and the whole arena looked about 30% too small.

The fix measures the floor instead of trusting it — a ring of depth-sensor raycasts sampled over several sweeps, taking a low percentile rather than a median so furniture in the room can't drag the estimate upward. Where depth isn't available, staff lay a controller on the floor instead. On device the two methods agreed to within 2 cm.

## Running a venue

Venue realities shaped as much of the build as the game did. Player identity follows the numbered square on the mat rather than the headset, so a faulty unit can be swapped mid-session. A killed player is downed rather than removed, and walks to a health station to rejoin — nobody can respawn by teleporting in a room full of real bodies. A head-locked vignette warns anyone approaching the mat edge or an obstacle.

Session and match records upload to a Supabase backend behind a React dashboard, written offline-first: queued to disk, retried with backoff, and reconciled from a crash journal on the next launch, because venue internet can't be relied on. The client also gets an in-editor Arena Setup tool that creates and validates new arena sizes and maps without code, down to exporting the floor mat as a 1:1 print.

The wave mode's enemies run on the [networked enemy AI framework](/projects/photon-enemy-ai/) built alongside this project.

## Outcome

Proven on device so far: the calibration solve, verification and anchor persistence; walls holding to the spatial anchor across scene loads; floor correction by both depth sensing and controller; and the session lifecycle that returns every headset to calibration for the next group. The full multi-headset match loop — player-versus-player damage, scoring, and the analytics pipeline end to end — is built and waiting on venue testing ahead of the first deployment.
