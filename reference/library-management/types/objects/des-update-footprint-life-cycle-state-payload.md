---
title: "DesUpdateFootprintLifeCycleStatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-footprint-life-cycle-state-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateFootprintLifeCycleStatePayload

Payload associated with updating a footprint life cycle state.

### Returned By

[`desUpdateFootprintLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-footprint-life-cycle-state.md) mutation

```graphql
type DesUpdateFootprintLifeCycleStatePayload {
  errors: [DesPayloadError!]!
  footprintId: ID!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `footprintId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Footprint identifier.
