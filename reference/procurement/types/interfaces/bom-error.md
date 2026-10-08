---
title: "BomError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-error"
bounded_context: "Procurement"
kind: "interfaces"
experimental: false
deprecated: false
---

# BomError

A common interface for all errors that might occur in mutations.

### Member Of

[`BomChangeBomReleaseLifecycleStatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-change-bom-release-lifecycle-state-payload.md) object · [`BomCreateBomPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-create-bom-payload.md) object

### Implemented By

[`BomInputValidationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-input-validation-error.md) object · [`BomPayloadError`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-payload-error.md) object

```graphql
interface BomError {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Error message.
