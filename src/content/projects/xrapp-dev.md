---
title: xrapp.dev — Enterprise VR Training Platform
company: 2 Dude Studios
role: Lead XR Engineer
timeframe: In development
stack: [Next.js, PostgreSQL, Drizzle ORM, Supabase Auth, Stripe, Node.js, Express, Docker, Unity 3D, Meta Quest]
summary: Multi-tenant VR training platform where the organisation is the tenant - entitlement, assignment, and attempt are modelled apart so training history survives roster and catalogue changes.
outcome: A nine-table PostgreSQL model behind a Next.js admin, Stripe billing scoped to the team rather than the user, and a separate containerised service bridging progress back to the customer's LMS.
order: 7
---

An organisation buys a training module once, assigns it to forty people, and each of those people attempts it several times over two years — failing, retrying, passing, then re-certifying. Staff leave. Modules get retired from the catalogue. Eighteen months later a compliance auditor asks who was certified on what, on which date, under which version.

Most training tools collapse that into one row per person per course, and the answer stops being recoverable the moment anything changes. The modelling problem is the product.

## What I built

The platform side of xrapp.dev: a Next.js admin application over PostgreSQL, with the headset client in Unity on standalone Meta Quest. The database is accessed through Drizzle, identity comes from Supabase Auth, billing runs on Stripe, and a separate containerised Express service carries progress back into whatever LMS the customer already runs.

<figure class="shot-figure">
  <picture>
    <source type="image/avif" srcset="/images/projects/xrapp-dev-card-800.avif 800w, /images/projects/xrapp-dev-card-1600.avif 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <source type="image/webp" srcset="/images/projects/xrapp-dev-card-800.webp 800w, /images/projects/xrapp-dev-card-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px" />
    <img src="/images/projects/xrapp-dev-card-800.webp" alt="System diagram of an instructor-led VR training session: six headset nodes around one authoritative session hub, beside an analytics bar chart" loading="lazy" width="1600" height="900" />
  </picture>
  <figcaption>In active development and not yet publicly released - this shows the session architecture rather than the product UI.</figcaption>
</figure>

## The team is the tenant

Every row that matters carries a `team_id`. A team owns its members, its purchased modules, its assignments, its attempt history, and its audit log — and it is the team, not the user, that holds `stripe_customer_id`, `stripe_subscription_id`, `plan_name`, and `subscription_status`.

That last part is the decision people get wrong. If billing hangs off a user, the account dies with the employee who signed up and a seat change becomes a migration. Hanging it off the team means the person who pays, the person who administers, and the person who trains are three different roles against one durable entity.

Isolation is enforced in the query layer rather than with row-level security: a request resolves the caller's team once, and every query is scoped through it. That trades the database-level guarantee RLS would give for a single place to reason about access, which is the right call at this size and the wrong one at a much larger one. It is written down as a decision rather than left as an accident, because it is the thing to revisit first if the platform grows into customer-managed sub-orgs.

## Entitlement, assignment, and attempt are three different things

This is the core of the model, and it is three tables rather than one by deliberate choice:

- **`team_training_modules`** — what a team is *entitled* to. Records `acquired_via`, `price_paid`, `currency`, and `transaction_id`, so a module bought in a bundle, bought outright, or granted free is distinguishable two years later.
- **`member_training_assignments`** — who was *asked* to do it, by whom, and when. Carries `assigned_by`, which turns "who put this person on this course" into a query rather than a conversation.
- **`training_attempts`** — what actually *happened*. Many per assignment, each with `status`, `score`, `started_at`, and `completed_at`.

Keeping them apart is what makes the auditor's question answerable. Entitlement survives a module being retired from the catalogue. Assignment survives the assigner leaving. Attempts accumulate instead of overwriting, so a re-certification two years later sits alongside the original pass rather than replacing it.

`assignment_id` on an attempt is deliberately nullable — someone can run a module they are entitled to without having been assigned it, and that attempt is still real and still worth recording. A non-null foreign key there would have forced a fake assignment row for every self-directed run.

`attempt_data` stays a serialized blob rather than a set of columns. What a scenario needs to record — branch taken, hazard missed, time at each station — differs per module and is not yet stable enough to model. Freezing it into a schema now would mean a migration every time a module author wants a new field.

## Identity lives in two places on purpose

Supabase Auth owns credentials and sessions. A local `users` table owns domain identity — role, soft-delete, team membership — and the two are joined by a unique `auth_user_id`.

The duplication is the point. Domain tables get integer foreign keys and a user row that can be soft-deleted for audit history without destroying the auth record, and the authentication provider stays replaceable without rewriting every foreign key in the schema.

Presence sits on the membership row rather than the user: `is_online`, `last_seen_at`, `last_seen_device_type`, and `last_seen_device_name`. An instructor about to start a cohort session needs to know who is actually in a headset right now, not who has an account.

## The LMS bridge is a separate service

Customers already run an LMS, and that is where their compliance reporting lives. The bridge is a small Express service — not a module inside the platform — exposing a narrow surface: fetch the course list, push a progress record. It authenticates with JWT, ships as a container, and has its own test suite and CI pipeline.

Keeping it out of the main application means a customer's integration quirks never reach the platform's schema, and the bridge can be deployed, versioned, and broken independently of the product.

## Status

In active development. The multi-tenant data model, authentication, team and role management, Stripe subscription handling, the module catalogue with assignment and attempt tracking, and the LMS bridge service are built. The analytics surface, digital-twin scenario content, and offline deployment for sites without reliable connectivity are designed but not yet implemented.

The headset client reuses the authoritative-session architecture from the [free-roam arena work](/projects/free-roam-vr-arena/) — one host owning state, clients contributing input.
