---
title: "DesPartUpsertCustomPartsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upsert-custom-parts-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUpsertCustomPartsPayload

Represents the result of upserting custom parts.

### Returned By

[`desPartUpsertCustomParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upsert-custom-parts.md) mutation

```graphql
type DesPartUpsertCustomPartsPayload {
  errors: [DesPartErrorPayload!]!
  results: [DesPartCustomPartOperationResult!]!
}
```

### Fields

#### `DesPartUpsertCustomPartsPayload.errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object library-management

Errors that occurred while performing the operation.

#### `DesPartUpsertCustomPartsPayload.results` · [`[DesPartCustomPartOperationResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-operation-result.md) non-null object library-management

A collection of results for each part.
