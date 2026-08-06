---
title: "Ruins of the Forgotten: A Wild Survival"
company: 2 Dude Studios
role: Senior XR Engineer
timeframe: In development — Early Access planned Q3 2026
stack: [Unity 3D, C#, HLSL / Custom Shaders, Animation Systems, AI Behavior Trees, Procedural Generation]
summary: First-person open-world survival horror on Steam — procedurally generated jungle islands where wildlife turns hostile after dark. In development, Early Access planned for Q3 2026.
order: 4
---

Survival games live or die on two things: does the world feel different every time you enter it, and do the threats in it feel alive rather than scripted. Both are procedural-systems problems, not art problems — you can't hand-place enough content to make an open world feel unpredictable, and you can't script enough individual animal behaviors to make a day/night threat shift feel real.

## What I'm building

Ruins of the Forgotten is a first-person survival horror game: you're a forest ranger stranded in a jungle warped by a supernatural anomaly, managing hunger, thirst, and health while the wildlife around you flips from peaceful to hostile as night falls. My work on it spans custom HLSL shaders for the jungle's day/night atmosphere, the animation systems behind that peaceful-to-hostile creature transformation, and the AI behavior layer underneath it — different creatures are territorial, some only hunt at night, others only surface in campfire light, so the behavior tree has to branch on time-of-day and player state, not just proximity. The islands themselves are procedurally generated, so no two playthroughs lay out the same.

## Visual

<figure>
  <picture>
    <source type="image/avif" srcset="/images/projects/ruins-of-the-forgotten-400.avif 400w, /images/projects/ruins-of-the-forgotten-800.avif 800w, /images/projects/ruins-of-the-forgotten-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
    <source type="image/webp" srcset="/images/projects/ruins-of-the-forgotten-400.webp 400w, /images/projects/ruins-of-the-forgotten-800.webp 800w, /images/projects/ruins-of-the-forgotten-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
    <source srcset="/images/projects/ruins-of-the-forgotten-400.svg 400w, /images/projects/ruins-of-the-forgotten-800.svg 800w, /images/projects/ruins-of-the-forgotten-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
    <img src="/images/projects/ruins-of-the-forgotten-1.webp" alt="Ruins of the Forgotten — placeholder image" loading="lazy" width="1200" height="675" class="h-full w-full object-cover rounded" />
  </picture>
  <figcaption class="sr-only">Placeholder video/screenshot — replace with actual gameplay footage or trailer thumbnail.</figcaption>
</figure>
<p class="mt-2 font-mono text-xs text-muted">Placeholder video (Big Buck Bunny, CC-BY — Blender Foundation) — no real gameplay footage was available yet, swap for actual Ruins of the Forgotten trailer/gameplay. The Steam store page also has real trailer clips: <a href="https://store.steampowered.com/app/2726410/Ruins_of_the_Forgotten__A_Wild_Survival/">store.steampowered.com/app/2726410</a>.</p>

## Where it stands

Not yet released. Early Access is planned for Q3 2026 (verified against the Steam store page as of July 2026) — a demo is already available on Steam.

TODO: once Early Access ships, swap this section for real launch numbers — wishlist conversions, day-one player count, or whatever's worth naming. In the meantime, is there a specific technical decision on this one you'd want to lead with instead of the general shader/animation/AI summary above — e.g. how the day/night behavior branching actually works, or a procedural-generation detail?
