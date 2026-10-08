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

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the updated footprint.
