---
title: "DesPartRemoveCustomPartsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-remove-custom-parts-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartRemoveCustomPartsPayload

Represents the payload returned after removing custom parts.

### Returned By

[`desPartRemoveCustomParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-remove-custom-parts.md) mutation

```graphql
type DesPartRemoveCustomPartsPayload {
  errors: [DesPartErrorPayload!]!
  results: [DesPartCustomPartOperationResult!]!
}
```

### Fields

#### `errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `results` · [`[DesPartCustomPartOperationResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-operation-result.md) non-null object

A collection of results for each part.
