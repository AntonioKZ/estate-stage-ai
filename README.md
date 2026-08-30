# EstateStage AI

Architecture-first AI virtual staging MVP for real-estate photography.

## MVP v0.3.1

- JPG/PNG/WEBP upload, max 10 MB
- room selection and Restyle / Declutter + Staging modes
- 8 interior design styles
- 1–4 generated variants
- Architecture Lock for geometry, floors, openings, fixed systems, kitchens and sanitary fixtures
- before/after interactive comparison
- generated variant gallery and download
- local generation history
- explicit provider status: LIVE or DEMO
- server-side provider adapter for FLUX.1 Kontext via fal.ai
- safe demo fallback when `FAL_KEY` is not configured
- mandatory human-review quality gate before publication

## Pipeline

Input Validator → Prompt Architect → Architecture Guardian → AI Provider → Human Review Gate

The system intentionally does not fabricate geometry or photorealism scores. Automated visual QC can be added after the staging provider benchmark is complete.

## AI provider

Set `FAL_KEY` as a server-side environment variable to enable FLUX Kontext. Never expose it using a `NEXT_PUBLIC_*` variable.

Without `FAL_KEY`, the application stays fully usable for workflow testing but returns the original image as an explicitly labelled demo result.

## Development

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Deployment

Vercel project: `estate-stage-ai`.

The current release targets Next.js 16.3.3 and React 19.2.x.
