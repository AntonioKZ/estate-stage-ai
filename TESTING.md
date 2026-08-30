# Testing Strategy

## Required layers
1. Static: TypeScript strict + lint.
2. Unit: pure domain logic, validation, state transitions and provider mapping.
3. Integration: database ownership/RLS, storage authorization and generation persistence.
4. E2E: critical user journeys with Playwright.
5. Visual/manual release check: 375, 768, 1024, 1440 px.

## Critical E2E scenarios
- User can sign in and create a project.
- Valid image upload succeeds; invalid upload is rejected.
- Generation request enters a visible processing state.
- Completed job displays before/after result.
- Failed job displays an actionable retry path.
- User A cannot access User B project/assets/jobs.

## AI-specific tests
Do not assert subjective image quality with brittle pixel snapshots. Test request construction, provider response parsing, state transitions, retries, idempotency and metadata persistence deterministically. Keep provider calls mocked in normal CI.

## Completion gate
Before a task is reported complete run the relevant subset; before merge/release run lint, typecheck, unit/integration tests, E2E smoke tests and production build.
