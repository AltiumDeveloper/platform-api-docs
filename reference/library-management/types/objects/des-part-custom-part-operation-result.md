---
title: "DesPartCustomPartOperationResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-operation-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPartOperationResult

Represents the result of an operation for a custom part.

### Member Of

[`DesPartRemoveCustomPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-remove-custom-parts-payload.md) object · [`DesPartUpsertCustomPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upsert-custom-parts-payload.md) object

```graphql
type DesPartCustomPartOperationResult {
  errorMessage: String
  partId: DesPartManufacturerPartId!
}
```

### Fields

#### `errorMessage` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The error message if the operation failed.

#### `partId` · [`DesPartManufacturerPartId!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id.md) non-null object

The identifiers of the part.
