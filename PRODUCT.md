# Product — Estate Stage AI

## Problem
Real-estate professionals need listing-ready visual staging without the cost and delay of physical staging or manual 3D work.

## MVP outcome
A user uploads a room photo, chooses room/style constraints, receives realistic staged variants, compares before/after, and exports a listing-ready result.

## Primary users
- Real-estate agents and agencies
- Property photographers
- Home stagers
- Property owners preparing listings

## MVP journey
1. Sign in.
2. Create a property/project.
3. Upload an original room image.
4. Select room type and staging style.
5. Request generation.
6. Observe queued/processing/completed/failed state.
7. Compare original and generated result.
8. Regenerate or download an approved variant.

## MVP requirements
- Authentication and per-user project isolation
- Safe image upload and storage
- Project/room/image data model
- Asynchronous generation-job model
- Provider-neutral AI generation adapter
- Before/after comparison
- Generation history and status
- Responsive dashboard
- Clear failure/retry behavior
- Usage telemetry suitable for later credits/billing

## Quality bar
Generated staging should preserve room geometry, windows, doors, fixed architectural elements and perspective unless the user explicitly requests structural changes. Results should avoid duplicated furniture, warped geometry, impossible shadows and obvious AI artifacts.

## Out of scope for first MVP
Full CAD reconstruction, construction drawings, structural renovation, native mobile apps, marketplace features, multi-agency enterprise administration and automated listing publication.

## Success metrics
- Upload-to-first-result completion rate
- Median generation completion time
- Generation failure rate
- Regeneration rate
- Result download rate
- Percentage of sessions reaching a completed generation
