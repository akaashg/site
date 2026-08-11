---
title: Hide and Seek
company: Independent project
role: Unity Game Developer
timeframe: Shipped - live on Google Play
stack: [Unity, C#, Android, AI Perception, Blender]
summary: Casual mobile game where a single player takes either side of hide-and-seek - hiding and collecting coins, or tracking invisible hiders by their footprints against a timer.
outcome: Live on Google Play with 500+ downloads, actively maintained through Android SDK and Unity runtime updates.
liveUrl: https://play.google.com/store/apps/details?id=com.DudeStudios.HideNSeek
liveLabel: Get it on Google Play
availability: Live on Google Play. Rated 3+. Last updated December 2025.
order: 12
---

Hide-and-seek is a two-sided game, and most digital versions only build one side of it well. This one is playable from either position in single player.

## What I built

The player picks a side, and each side is a different game:

- **Hiding** — stay concealed and collect coins without being spotted.
- **Seeking** — every hider is invisible. The only signal you get is the footprints they leave behind, and you have to find all of them before the timer runs out.

The seeking half is the more interesting engineering problem. Making hiders invisible removes the usual feedback loop, so the footprint trail has to carry the entire search: it needs to persist long enough to be followable, decay fast enough that the map does not turn into noise, and read clearly at a glance on a phone screen.

## Screenshots

<div class="shot-grid shot-grid--portrait">
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/hide-and-seek-shot-1-800.avif 800w, /images/projects/hide-and-seek-shot-1-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/hide-and-seek-shot-1-800.webp 800w, /images/projects/hide-and-seek-shot-1-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/hide-and-seek-shot-1-800.webp" alt="Top-down maze level with a player character, scattered footprints, coins, and a countdown timer" loading="lazy" width="1080" height="1920" />
    </picture>
    <figcaption>Seeking: footprints are the only trace an invisible hider leaves.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/hide-and-seek-shot-2-800.avif 800w, /images/projects/hide-and-seek-shot-2-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/hide-and-seek-shot-2-800.webp 800w, /images/projects/hide-and-seek-shot-2-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/hide-and-seek-shot-2-800.webp" alt="Top-down maze with the player beside a hider, footprint trails leading away" loading="lazy" width="1080" height="1920" />
    </picture>
    <figcaption>Closing on a hider by following the trail.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/hide-and-seek-shot-3-800.avif 800w, /images/projects/hide-and-seek-shot-3-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/hide-and-seek-shot-3-800.webp 800w, /images/projects/hide-and-seek-shot-3-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/hide-and-seek-shot-3-800.webp" alt="Top-down maze with a cone of light sweeping the play area and remaining-hider markers" loading="lazy" width="1080" height="1920" />
    </picture>
    <figcaption>The search cone, timer, and remaining-hider markers.</figcaption>
  </figure>
</div>

<p class="shot-credit">Screenshots from the Google Play listing.</p>

## Where it stands

Live on Google Play with 500+ downloads, rated for ages 3+. It is still maintained — the build has been kept current with Google Play's target SDK requirements and the Unity runtime rather than left to go stale after launch.
