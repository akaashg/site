---
title: CollaboratAR — Multi-User AR Design Review
company: CodeXAR
role: Lead Unity Developer, Real-Time Multi-User AR
timeframe: Jan 2022 - Dec 2022
stack: [Unity, AR Foundation, Mirror Networking, Master Server Toolkit, Draco mesh compression, iOS, Android]
summary: Enterprise AR design review across geographies, where the engineering problem was holding 8K scanned-material fidelity on a phone - a virtual sample nobody trusts replaces nothing.
outcome: Led a 5-person team across iOS and Android; the capture-to-runtime pipeline held 8K source detail on mobile, and the workflow cut clients' physical-sampling and travel costs by 40%.
order: 3
---

A buyer deciding on a garment runs a thumb across the weave. Replacing that with a phone screen only works if the render is good enough that nobody asks for the physical sample anyway — and the moment someone does ask, the product has failed, however elegant the networking is.

So the fidelity was not a polish target. It was the thing the business case rested on, and every other decision bent around it.

## What I built

A real-time multi-user AR collaboration platform in Unity, letting stakeholders in different countries place the same scanned product in their own rooms and review it together, with voice and annotation. I led a 5-person team and shipped on both iOS and Android.

<div class="shot-grid">
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/ar-design-review-platform-shot-1-800.avif 800w, /images/projects/ar-design-review-platform-shot-1-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/ar-design-review-platform-shot-1-800.webp 800w, /images/projects/ar-design-review-platform-shot-1-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/ar-design-review-platform-shot-1-800.webp" alt="Tablet showing a patterned jacket placed in a room in AR, with AR, voice, share and annotation controls" loading="lazy" width="1600" height="1287" />
    </picture>
    <figcaption>A scanned garment placed in a room, with voice and annotation controls for review sessions.</figcaption>
  </figure>
</div>

<p class="shot-credit">Screenshots from the akaashgarg.com portfolio.</p>

## Fidelity was the fixed point

The usual way to put a photogrammetry scan on a phone is to decimate until it fits and accept what is left. For a procurement decision about material, what is left is exactly the part that mattered — weave, pile direction, the way light sits in a fold.

So fidelity became the constraint the rest of the system was designed around, rather than the variable that absorbed every other compromise. That inverted the normal order of work: instead of building the app and optimising the assets to fit it, the capture-to-runtime pipeline came first and the application was built on what that pipeline could guarantee.

The pipeline carried the 8K source detail through decimation and retopology, texture atlasing, Draco mesh compression, LOD tiers, and shaders written for the specific material behaviour rather than a general-purpose lit shader. Each of those gives up something; the sequence matters because they compound differently depending on order, and the perceptual budget was spent where a reviewer actually looks.

## Don't send the asset, send the session

Stakeholders were in different countries, often on corporate networks, reviewing assets measured in hundreds of megabytes after processing. Streaming geometry between clients during a review would have made the session hostage to the worst connection in the call.

The asset is distributed once and resolved locally. What crosses the network during a session is small and bounded: who is present, where each participant is looking, what they placed where, and the annotations they left. Mirror handled the session state and Master Server Toolkit the brokering, so two reviewers could find each other without either of them hosting.

This is the same principle as putting a printed mat under a [free-roam VR arena](/projects/free-roam-vr-arena/): work out what can be established once on both ends, and the network only has to carry the difference.

## Two platforms, one pipeline

iOS and Android were not a porting step at the end. Both were targets from the first build, which constrained the pipeline to formats and compression paths that behaved the same on each, and meant certification cycles and device-specific regressions were handled continuously rather than discovered in the final month.

## Outcome

The shipped workflow cut clients' physical-sampling and travel costs by 40%, validated against their own procurement metrics rather than engagement numbers — which is the only measure that matters for a tool whose job is to stop a sample being shipped.

What I would do differently: the per-material shader work was effective but hand-tuned per asset class, and it became the slowest part of onboarding a new product category. A parameterised material system, authored once, would have traded a little fidelity for a lot of throughput — and at the volume the platform was heading for, that was the better trade.
