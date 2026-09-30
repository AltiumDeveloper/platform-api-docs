---
title: "DesUpdateFootprintPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-footprint-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateFootprintPayload

Payload of updating a footprint.

### Returned By

[`desUpdateFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-footprint.md) mutation

```graphql
type DesUpdateFootprintPayload {
  errors: [DesPayloadError!]!
  id: ID!
}
```

### Fields

#### `DesUpdateFootprintPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesUpdateFootprintPayload.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Identifier of the updated footprint.
