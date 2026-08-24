---
title: VR School
company: Independent project
role: VR Platform Developer
timeframe: Portfolio project
stack: [Unity, Photon Networking, React, Three.js, Blender, VR SDK]
summary: Immersive educational platform that connects physical and virtual classrooms across VR headsets and Android devices.
outcome: Supports interactive teaching, learning, and collaboration in shared virtual spaces.
order: 9
---

Remote and hybrid classrooms lose the parts of in-person teaching that are hardest to replace — a teacher walking a 3D model, students collaborating around the same object — unless the virtual classroom actually puts everyone in the same shared space instead of on a grid of video tiles.

<div class="my-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
  <div class="aspect-video w-full">
    <iframe
      src="https://www.youtube-nocookie.com/embed/TrSPepYXo4A?rel=0&modestbranding=1"
      title="VR School demo video"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="h-full w-full"
    ></iframe>
  </div>
</div>

## What I built

An educational VR platform that turns lessons into shared, interactive virtual sessions across Oculus Quest, HP and HTC headsets, and Android devices, so schools aren't locked into a single hardware vendor. Built in Unity with Photon Networking for the multi-user session layer, React and Three.js for companion web tooling, and Blender-authored environments and VR SDK integrations across the supported headsets, giving educators and students shared spaces for immersive teaching, learning, and collaboration regardless of which device they log in from.

## Screenshots

<div class="shot-grid">
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/vr-school-shot-1-800.avif 800w, /images/projects/vr-school-shot-1-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/vr-school-shot-1-800.webp 800w, /images/projects/vr-school-shot-1-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/vr-school-shot-1-800.webp" alt="VR headset view of a classroom with desks and chairs, a tracked hand holding a board" loading="lazy" width="1024" height="1024" />
    </picture>
    <figcaption>Classroom environment from the headset.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/vr-school-shot-2-800.avif 800w, /images/projects/vr-school-shot-2-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/vr-school-shot-2-800.webp 800w, /images/projects/vr-school-shot-2-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/vr-school-shot-2-800.webp" alt="Tracked hands holding a marker in front of a whiteboard in the classroom" loading="lazy" width="1024" height="1024" />
    </picture>
    <figcaption>Hand-tracked marker pickup.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/vr-school-shot-3-800.avif 800w, /images/projects/vr-school-shot-3-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/vr-school-shot-3-800.webp 800w, /images/projects/vr-school-shot-3-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/vr-school-shot-3-800.webp" alt="A hand drawing a blue shape on a virtual whiteboard" loading="lazy" width="1024" height="1024" />
    </picture>
    <figcaption>Drawing on the shared whiteboard.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/vr-school-shot-4-800.avif 800w, /images/projects/vr-school-shot-4-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/vr-school-shot-4-800.webp 800w, /images/projects/vr-school-shot-4-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/vr-school-shot-4-800.webp" alt="A virtual whiteboard with two blue shapes drawn on it" loading="lazy" width="1024" height="1024" />
    </picture>
    <figcaption>Persistent strokes on the board surface.</figcaption>
  </figure>
</div>

<p class="shot-credit">Screenshots from the akaashgarg.com portfolio.</p>

## Outcome

A cross-headset, cross-platform classroom shell built to prove that structured, multi-user immersive teaching doesn't have to lock a school into one hardware vendor.
