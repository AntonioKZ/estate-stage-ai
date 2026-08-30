# Design System

## Product character
Professional real-estate software: visual, restrained, fast and trustworthy. The room image is the primary content; UI chrome must not compete with it.

## Layout
- Mobile-first responsive behavior.
- Explicit verification at 375, 768, 1024 and 1440 px.
- Keep primary action visible without obscuring the image workspace.
- Use consistent spacing tokens; avoid arbitrary one-off spacing.

## Components
Use reusable primitives for Button, Input, Select, Dialog, Toast, Card, Badge, Skeleton, EmptyState, ErrorState, UploadDropzone, GenerationStatus and BeforeAfterCompare.

## States
Every asynchronous surface must define loading, empty, error, disabled and success states. Do not use fake controls or placeholder content in production paths.

## Accessibility
Keyboard reachable controls, visible focus, semantic landmarks/headings, labelled icon buttons, useful alt text, adequate contrast and reduced-motion support.

## Staging workspace
Prioritize: original preview → room/style controls → generate CTA → job status → before/after comparison → download/regenerate actions.
