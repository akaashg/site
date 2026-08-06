---
title: Real-Time Multi-User AR Design Review Platform
company: CodeXAR
role: Lead Unity Developer, Real-Time Multi-User AR
timeframe: Jan 2022 – Dec 2022
stack: [Unity, AR Foundation, Mirror Networking, Draco mesh compression, iOS, Android]
summary: Enterprise AR platform letting stakeholders in different geographies review complex 3D assets together, at 8K real-time rendering quality, on mobile hardware.
outcome: Cut enterprise clients' physical sampling and travel costs by 40%, validated by client procurement metrics — shipped on schedule across iOS and Android.
order: 3
---

Enterprise stakeholders reviewing physical products (the shipped product was an AR cloth/material viewer) usually means flying people to a location or shipping physical samples across geographies. The alternative — remote AR review — only works if the rendering quality is good enough to actually replace being in the room with the material, on phone-class GPUs.

## What I built

I led a 5-person team building a real-time multi-user AR collaboration tool in Unity with AR Foundation, Mirror Networking, and Draco mesh compression, so multiple stakeholders could review the same complex 3D asset simultaneously from different locations. The hard technical target was 8K real-time rendering performance on mobile AR devices — hit through aggressive shader optimization, GPU-friendly material work, texture atlasing, Draco compression, and LOD systems, without visible quality loss for the review workflow. I also coordinated cross-platform deployment across iOS and Android, including build pipelines and certification cycles.

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/ar-design-review-platform-400.avif 400w, /images/projects/ar-design-review-platform-800.avif 800w, /images/projects/ar-design-review-platform-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/ar-design-review-platform-400.webp 400w, /images/projects/ar-design-review-platform-800.webp 800w, /images/projects/ar-design-review-platform-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/ar-design-review-platform-400.svg 400w, /images/projects/ar-design-review-platform-800.svg 800w, /images/projects/ar-design-review-platform-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/ar-design-review-platform-1.webp" alt="AR Design Review Platform — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with AR session screenshot or compression/LOD pipeline diagram.</figcaption>
</figure>

## Outcome

The platform shipped on schedule and reduced enterprise clients' physical sampling and travel costs by 40% — a number that came from the client's own procurement metrics, not an internal estimate.

TODO: what's the one technical decision from this build you'd point to first — the Draco compression call, the LOD strategy, or something else?
