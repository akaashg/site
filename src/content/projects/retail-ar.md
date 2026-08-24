---
title: Retail AR
company: Independent project
role: Unity AR Developer
timeframe: Portfolio project
stack: [Unity, AR Foundation, ARCore, ARKit, Blender]
summary: AR retail proof of concept that lets customers place furniture or electronics in their own space before purchase.
outcome: Demonstrates plane-tracked product placement for furniture and electronics retail.
order: 7
---

Retail AR uses Unity's plane tracking to place furniture or electronics on real-world surfaces. It was designed as a proof of concept for retail clients who need customers to judge a product's size and style before buying — a decision that usually stalls without seeing the item at real scale in the room it'll live in.

## What I built

An AR proof of concept combining ARCore and ARKit plane-tracking support with an event-driven Unity architecture, so product models drop convincingly onto real-world surfaces and respond to the same interaction events regardless of platform. Blender-authored assets stand in for catalog items. The goal was to make product try-outs part of the shopping flow itself — letting a customer size a couch or a TV in their own living room — rather than a separate visualization tool bolted onto checkout.

## Screenshots

<div class="shot-grid shot-grid--portrait">
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/retail-ar-shot-1-800.avif 800w, /images/projects/retail-ar-shot-1-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/retail-ar-shot-1-800.webp 800w, /images/projects/retail-ar-shot-1-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/retail-ar-shot-1-800.webp" alt="Mobile product catalogue listing chairs with category filters and prices" loading="lazy" width="1080" height="2400" />
    </picture>
    <figcaption>Catalogue with category filters.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/retail-ar-shot-2-800.avif 800w, /images/projects/retail-ar-shot-2-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/retail-ar-shot-2-800.webp 800w, /images/projects/retail-ar-shot-2-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/retail-ar-shot-2-800.webp" alt="Product detail screen for a chair with a View in AR button" loading="lazy" width="1080" height="2400" />
    </picture>
    <figcaption>Product detail, with the handoff into AR.</figcaption>
  </figure>
  <figure>
    <picture>
      <source type="image/avif" srcset="/images/projects/retail-ar-shot-3-800.avif 800w, /images/projects/retail-ar-shot-3-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <source type="image/webp" srcset="/images/projects/retail-ar-shot-3-800.webp 800w, /images/projects/retail-ar-shot-3-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 440px" />
      <img src="/images/projects/retail-ar-shot-3-800.webp" alt="AR camera view placing a virtual office chair on a real floor beside a physical chair, with colour swatches and a Buy button" loading="lazy" width="1080" height="2400" />
    </picture>
    <figcaption>Plane-tracked placement in the room, with colourway switching and buy.</figcaption>
  </figure>
</div>

<p class="shot-credit">Screenshots from the akaashgarg.com portfolio.</p>

## Outcome

A working plane-tracked placement demo across ARCore and ARKit, built to show retail clients how in-app product visualization can support both brand discovery and purchase decisions before a customer commits.
