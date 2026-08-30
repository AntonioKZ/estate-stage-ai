# Deployment Workflow

## Environments
- Local development
- Preview per pull request
- Production from protected main branch

## CI gate
On pull requests run install with lockfile, lint, typecheck, tests and production build. Add Playwright smoke coverage once the first end-to-end flow exists.

## Vercel
Use preview deployments for review. Production environment variables are configured in Vercel and never committed. Separate preview/production Supabase configuration where practical.

## Release checklist
- CI green
- Database migrations reviewed
- RLS/authorization verified
- Required environment variables present
- No client-exposed privileged secrets
- Responsive smoke check
- Critical user journey smoke test
- Error/loading/empty states checked
- Production deployment verified after release

## Rollback
Keep changes small and reversible. Database migrations should prefer backward-compatible expand/migrate/contract patterns when destructive changes would make rollback unsafe.
