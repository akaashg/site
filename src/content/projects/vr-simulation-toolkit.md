---
title: VR Simulation Toolkit
company: Independent project
role: XR Simulation Developer
timeframe: Portfolio project
stack: [Unity, Unreal Engine, Photon Networking, Three.js, CesiumJS, Blender, Autodesk Revit]
summary: Configurable VR simulation framework for physics-driven training, education, and immersive operational experiences.
outcome: Provides reusable interaction and simulation foundations across XR use cases.
order: 11
---

Training and simulation projects tend to get rebuilt from scratch every time the use case changes — different physics rig, different world data, different engine — because most VR frameworks are built for one simulation, not a family of them.

## What I built

A configurable VR simulation framework for training, education, and operational simulations, designed to swap engines and world-data sources rather than lock a project into one stack: Unity or Unreal Engine for the runtime, React and Three.js for companion web tooling, Google Maps API or CesiumJS for geospatial world data, Photon Networking for multi-user sessions, and Blender or Autodesk Revit for asset pipelines, with ARKit/ARCore support for mobile AR variants. The core of the toolkit is reusable physics-driven interaction and simulation systems — grabbing, tool use, environmental triggers — built once and reconfigured per project instead of rebuilt.

## Visual

<figure>
	<picture>
		<source type="image/avif" srcset="/images/projects/vr-simulation-toolkit-400.avif 400w, /images/projects/vr-simulation-toolkit-800.avif 800w, /images/projects/vr-simulation-toolkit-1.avif 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source type="image/webp" srcset="/images/projects/vr-simulation-toolkit-400.webp 400w, /images/projects/vr-simulation-toolkit-800.webp 800w, /images/projects/vr-simulation-toolkit-1.webp 1200w" sizes="(max-width: 900px) 100vw, 900px" />
		<source srcset="/images/projects/vr-simulation-toolkit-400.svg 400w, /images/projects/vr-simulation-toolkit-800.svg 800w, /images/projects/vr-simulation-toolkit-1.svg 1200w" sizes="(max-width: 900px) 100vw, 900px" type="image/svg+xml" />
		<img src="/images/projects/vr-simulation-toolkit-1.webp" alt="VR Simulation Toolkit — placeholder image" loading="lazy" width="1200" height="675" class="w-full rounded" />
	</picture>
	<figcaption class="sr-only">Placeholder image — replace with a screenshot of a simulation built on the toolkit.</figcaption>
</figure>

## Outcome

A reusable simulation foundation meant to cut the setup cost of each new training or education build by starting from working interaction and physics systems instead of a blank engine project.
