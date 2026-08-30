# Architecture Decision Log

Use this file for durable decisions that future agents must understand. Do not log routine implementation details.

## ADR-001 — Repository instructions
**Status:** accepted

`AGENTS.md` is the canonical cross-agent engineering contract. Tool-specific instruction files should reference it rather than duplicate the same rules.

## ADR-002 — Provider-neutral image generation
**Status:** accepted

The application depends on an internal generation interface, not directly on a single image-model vendor. This permits provider/model replacement, A/B tests and cost/quality optimization without rewriting product logic.

## ADR-003 — Supabase security model
**Status:** accepted

User-owned records and assets are private by default. Authorization is enforced primarily through database RLS/storage policies, with server-side ownership checks at sensitive boundaries.

## ADR-004 — Generation as a job
**Status:** accepted

AI generation is represented as an explicit job/state machine rather than a synchronous UI assumption. This supports retries, long-running providers, observability and future queue/worker migration.
