# EstateStage AI

AI virtual staging workspace with an architecture-first pipeline.

## MVP
- Photo upload
- Room configuration
- Restyle / Empty + Staging
- 8 design styles
- Architecture Lock
- Before/after comparison
- Provider-agnostic staging orchestrator
- Quality-gate architecture

## Pipeline
Input Validator → Room Analysis → Architecture Guardian → Staging Provider → Quality Inspector → Output

## Status
v0.1 foundation. The current preview uses a demo provider; the next release connects and benchmarks real image-generation providers while preserving the same provider contract.

## Deployment
Vercel project: `estate-stage-ai`
