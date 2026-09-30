---
title: "DesUpdateSymbolLifeCycleStatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-symbol-life-cycle-state-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateSymbolLifeCycleStatePayload

Payload associated with updating a symbol life cycle state.

### Returned By

[`desUpdateSymbolLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-symbol-life-cycle-state.md) mutation

```graphql
type DesUpdateSymbolLifeCycleStatePayload {
  errors: [DesPayloadError!]!
  symbolId: ID!
}
```

### Fields

#### `DesUpdateSymbolLifeCycleStatePayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesUpdateSymbolLifeCycleStatePayload.symbolId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Symbol identifier.
