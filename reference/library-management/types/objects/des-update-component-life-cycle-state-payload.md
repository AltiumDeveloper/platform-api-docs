---
title: "DesUpdateComponentLifeCycleStatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-component-life-cycle-state-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateComponentLifeCycleStatePayload

Payload associated with updating a component life cycle state.

### Returned By

[`desUpdateComponentLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-life-cycle-state.md) mutation

```graphql
type DesUpdateComponentLifeCycleStatePayload {
  componentId: ID!
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateComponentLifeCycleStatePayload.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Component identifier.

#### `DesUpdateComponentLifeCycleStatePayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
