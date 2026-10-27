---
title: Unity Kit — Agent Guardrails for Unity
company: Open source
role: Author and maintainer
timeframe: Shipped - v0.2.0
stack: [Claude Code, Bash, Unity 6, Unity CLI, Unity Test Framework, Git]
summary: A Claude Code plugin that stops Unity work ending on a lie - the turn cannot close while the project has compile errors, an orphaned .meta, or a reference that broke since the last commit.
outcome: Published MIT at v0.2.0. The decision the rest rests on - "not checked" is a distinct result from "passed", so the gate never launders uncertainty into a green tick.
liveUrl: https://github.com/akaashg/claude-code-unity-kit
liveLabel: View on GitHub
availability: MIT licensed, v0.2.0, installable from a public marketplace. Requires Claude Code and Unity 6.
order: 3
---

An agent will tell you it is done. The Console will be red, a `.meta` file will have lost its GUID, and the prefab that referenced it will be quietly broken — and the turn still ends with "done".

That is not carelessness. It is that nothing in the loop was able to contradict it. A probabilistic worker needs a deterministic gate, and Unity ships nothing an agent can run as one.

## What I built

A Claude Code plugin for Unity 6, published under MIT and installable from a public marketplace. Five skills, two hooks, two review subagents.

The hooks are the part that matters. Writes to `.meta` files, `Library/` and `Temp/` are refused outright. A turn cannot end while an orphaned `.meta` exists, while a reference broke since the last commit, or while the project does not compile.

## "Not checked" is not "passed"

Unity cannot open a project in batch mode while the Editor already has it open, so the compile check tries four routes in order: a running Unity-Skills server, the Unity CLI against a connected Editor, the `Editor.log` of whichever Editor holds the project, and finally batch mode once the Editor is closed. Each route knows whether its answer is current — Unity only recompiles on window focus unless something forces it, so a result can be real but stale.

When no route can answer, the check reports **stale** or **not checked**, with its own exit code, and never guesses. That sounds minor. It is the whole thesis: a gate that returns a false pass is worse than no gate, because it launders the agent's uncertainty into a green tick.

## Block what broke, not what was already broken

The reference check reads every GUID that a scene, prefab, material or asmdef points at, and looks for a `.meta` that owns it — across `Assets/`, `Packages/`, local `file:` packages and `Library/PackageCache`.

The naive version blocks on any unresolved reference, which makes it unusable. Real projects carry hundreds: one of mine has 1,089 broken at `HEAD`, mostly third-party materials pointing at textures their packs never shipped.

So it blocks only on what *changed*: a GUID that lived in a `.meta` at `HEAD` and does not now, or one that a changed file did not reference at `HEAD`. Breakage that was already committed gets listed, not blocked. An unknown GUID inside an asmdef never blocks on its own, because Asset Store asmdefs routinely reference optional assemblies that are not installed — the compile check catches the ones that actually matter.

All 361 unresolved GUIDs on that project were audited by hand to confirm the check had no false positives.

## A gate that is slow gets switched off

The first version took 18 seconds on the largest project and 98 seconds on a cold run. That is a check that gets disabled inside a week, and a disabled check protects nothing.

Almost all of it was process startup: `find` and `grep` across 13,000 `.meta` files, 34 seconds cold for another project's 20,000 package `.meta` files, and an `awk` path filter re-run over 304,000 reference lines. Rewritten to read through `git grep` with the filter cached per path, it runs in 4.6 and 2.6 seconds warm — with the unresolved list verified identical before and after, row for row. It still falls back to `find` outside git, inside submodules, and for any package folder `git grep` returns nothing for.

## Measured against not having it

The kit ships evals that run the same task twice, with the plugin and without.

`meta-edit-blocked`: asked to hand-edit a GUID, Claude with the kit scored 2/2 — the `.meta` untouched and the hook's message in the trace. Without it, 0/2: it changed the GUID exactly as asked.

`static-reset-review` is the more useful result, because it records a null. The reviewer's first description got zero delegations out of two runs; rewritten to lead with "Use for every review of Unity C# code", it fired 3/3. But Claude answers that question correctly without the kit as well — so the eval shows the subagent triggers, not that the answer improves. It is written down that way rather than quietly dropped.

The same discipline runs through the rest. [docs/TESTED.md](https://github.com/akaashg/claude-code-unity-kit/blob/main/docs/TESTED.md) opens with "Only what was actually run is listed. 'Not verified' means exactly that", and two evals sit there marked **Not run** because they need a Bash grant that Claude Code refuses on Windows.

That discipline also settles blame correctly. A package kept appearing in `manifest.json` after batch compiles, which looked like the kit writing to the project. Reading Unity's package manager log showed the Editor itself requesting it about a second after startup, in batch mode and in the GUI alike, beginning the hour Linux Dedicated Server Build Support was installed. It is Unity bug UUM-75804, "won't fix" on 6.0 — documented as Unity's, not claimed as the kit's and not quietly worked around.

## Status

v0.2.0 across four releases. Hook tests pass 42/42 on Windows under Git Bash, including a project path with non-ASCII characters. The reference check has been run read-only against three real Unity 6 projects, with `git status` unchanged after every run.

The roadmap adds one production-pipeline stage at a time — compile, references, build and tests so far, then version control, import settings, CI and crash triage — and each stage gets the same three pieces: a detect script, a gate, and a fix-loop skill.

It deliberately does not drive the Editor. It runs alongside Unity's official Claude Code plugin and the Unity MCP servers rather than replacing them: this is the guardrail layer, not the hands.
