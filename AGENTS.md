# Estate Stage AI — Engineering Agent Contract

## Mission
Build a production-ready AI virtual-staging SaaS. Optimize for correctness, security, maintainability, measurable UX quality, and fast iteration.

## Source of truth
Before coding, read in order: `PRODUCT.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `SECURITY.md`, `TESTING.md`, `DEPLOYMENT.md`, `DECISIONS.md`.

## Operating loop
1. Inspect existing code and relevant documentation before editing.
2. State the acceptance criteria internally before implementation.
3. Make the smallest coherent change that satisfies them.
4. Validate boundaries and failure states, not only the happy path.
5. Run lint, typecheck, tests and build before declaring work complete.
6. For UI changes verify 375, 768, 1024 and 1440 px layouts.
7. For security-sensitive changes verify authorization and data isolation server-side.
8. Record durable architectural decisions in `DECISIONS.md`.

## Engineering rules
- TypeScript strict. Avoid `any`; justify unavoidable exceptions.
- Prefer Server Components; use Client Components only where interactivity requires them.
- Validate all external input at trust boundaries.
- Never expose secrets or privileged database credentials to the browser.
- Treat uploaded images as untrusted input: validate type, size and ownership.
- Every tenant/user-owned database object requires explicit authorization/RLS.
- Do not weaken tests, lint, TypeScript, RLS or security controls merely to make CI pass.
- No fake production data, placeholder controls, dead buttons or unfinished navigation in release paths.
- Errors shown to users must be actionable and must not leak internals.
- Keep dependencies minimal and explain significant additions in `DECISIONS.md`.

## Definition of done
A task is done only when acceptance criteria are met and relevant automated checks pass. UI work must include loading, empty, error and success states where applicable. Database/security work must include negative authorization tests. Production-facing work must be deployable without local-only assumptions.

## AI image-generation safety
Keep generation providers behind a server-side adapter. Never persist provider secrets client-side. Track job ownership, status, provider/model metadata, cost-relevant usage and failure reason. Preserve the original image separately from generated variants.

## Next.js
When the installed Next.js version includes version-matched docs under `node_modules/next/dist/docs/`, read the relevant documentation before implementing framework-specific behavior.
