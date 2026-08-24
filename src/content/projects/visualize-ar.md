---
title: Visualize AR
company: Independent project
role: AR Visualization Developer
timeframe: Portfolio project
stack: [Unity, Three.js, WebXR, ARCore, ARKit, Node.js, Django, PostgreSQL]
summary: Augmented visualization system for exploring 3D graphs, heatmaps, and interactive dashboards in spatial context.
outcome: Brings real-time visual data into an immersive AR workflow.
order: 8
---

Raw data dashboards flatten the thing they're trying to explain — a heatmap or a 3D graph reads differently in spatial context than on a 2D chart, but getting there means marrying a real-time data backend to an AR rendering pipeline that can't lag behind the numbers.

## What I built

An augmented visualization system built in Unity and Three.js that renders 3D graphs, heatmaps, and interactive dashboards in AR (ARCore/ARKit), backed by a Node.js/Django service layer with PostgreSQL and Firebase for data, exposed over REST APIs and WebSockets for live updates. The dual Unity/Three.js front end let the same visualization concepts run both as a native mobile AR app and in-browser via WebXR, with the WebSocket layer keeping dashboards in sync with incoming data instead of requiring a manual refresh.

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/visualize-ar-400.avif 400w, /images/projects/visualize-ar-800.avif 800w, /images/projects/visualize-ar-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/visualize-ar-400.webp 400w, /images/projects/visualize-ar-800.webp 800w, /images/projects/visualize-ar-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/visualize-ar-400.svg 400w, /images/projects/visualize-ar-800.svg 800w, /images/projects/visualize-ar-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/visualize-ar-1.webp" alt="Visualize AR — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with a screenshot of a rendered AR dashboard.</figcaption>
</figure>

## Outcome

A working AR data-visualization pipeline meant to replace flat reporting screens with spatial, real-time dashboards a team can walk around and query live.
