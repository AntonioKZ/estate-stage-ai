# Security Baseline

## Secrets
- Secrets live only in server-side environment variables or managed secret stores.
- Never use privileged service credentials in browser bundles.
- Commit `.env.example`, never real `.env*` secrets.

## Authorization
- Authentication is not authorization.
- Enforce ownership/tenant isolation at the database layer with RLS and again at sensitive service boundaries where appropriate.
- Deny by default.

## Uploads
- Allow-list supported image MIME types and extensions.
- Enforce file-size and dimension limits.
- Generate storage paths server-side; do not trust client-provided ownership/path data.
- Never execute or render arbitrary uploaded HTML/SVG as trusted content.

## AI/provider boundary
- Provider keys remain server-side.
- Minimize metadata sent to providers.
- Validate provider responses before persistence.
- Use idempotency/correlation identifiers for generation jobs.

## Web baseline
- Validate form/API input with schemas.
- Protect state-changing operations from unauthorized invocation.
- Avoid unsafe HTML rendering.
- Use secure cookies/session defaults.
- Apply rate limits/quotas to expensive generation endpoints.
- Return generic client errors; retain diagnostic detail server-side.

## Release security gate
Before production release verify: no leaked secrets, dependency audit reviewed, RLS policies present and tested, unauthorized cross-user reads/writes fail, upload restrictions work, privileged routes reject anonymous/non-owner access, and production environment variables are scoped correctly.
