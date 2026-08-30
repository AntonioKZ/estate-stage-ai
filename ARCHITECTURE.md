# Architecture

## Target stack
- Next.js App Router + TypeScript strict
- Tailwind CSS + accessible component primitives
- Supabase Auth, Postgres and Storage
- Server-side AI generation adapter
- Vercel deployment
- GitHub Actions CI
- Playwright for critical end-to-end flows

## Logical architecture
Browser → Next.js UI → server actions/route handlers → domain services → Supabase/Postgres/Storage

Generation path:
UI → generation service → provider adapter → external image model → result ingestion → Storage + generation record → UI status/result

## Core modules
- `auth`: identity/session handling
- `projects`: property/project ownership
- `assets`: upload metadata and storage
- `generation`: jobs, state machine, prompts and provider adapters
- `usage`: generation usage/cost telemetry
- `ui`: dashboard, upload, style selection, comparison and history

## Data model baseline
- profiles
- projects
- rooms
- assets
- generation_jobs
- generation_outputs
- usage_events

Every user-owned row carries an owner/user relationship that can be enforced by RLS.

## Generation state machine
`queued → processing → completed | failed | cancelled`

Transitions must be idempotent. Provider callbacks/polling must never create duplicate outputs.

## Provider abstraction
Application code calls a single internal interface such as `generateStaging(request)` and does not depend directly on a specific provider SDK. Provider-specific request/response mapping stays inside adapters.

## Storage
Originals and generated outputs use separate logical paths/buckets. Store metadata in Postgres, binary objects in Storage. Use signed/authorized access rather than public buckets for user-owned originals.

## Observability
Structured server logs should include request/job correlation identifiers but no secrets or sensitive image URLs. Record generation latency, provider/model, status and error category.

## Scalability path
The MVP can begin with a simple server-triggered job workflow. The domain model must permit later migration to durable queues/workers without changing the UI or core entities.
