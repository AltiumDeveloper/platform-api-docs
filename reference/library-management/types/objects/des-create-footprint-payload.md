---
title: "DesCreateFootprintPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-create-footprint-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateFootprintPayload

Payload associated with creating footprint.

### Returned By

[`desCreateFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-create-footprint.md) mutation

```graphql
type DesCreateFootprintPayload {
  errors: [DesPayloadError!]!
  footprintId: ID
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `footprintId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The created footprint identifier.
