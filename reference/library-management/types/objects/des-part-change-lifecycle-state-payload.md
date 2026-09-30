---
title: "DesPartChangeLifecycleStatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-change-lifecycle-state-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartChangeLifecycleStatePayload

Represents the payload returned after changing the lifecycle state of a part.

### Returned By

[`desPartChangeLifecycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-change-lifecycle-state.md) mutation

```graphql
type DesPartChangeLifecycleStatePayload {
  errors: [DesPartErrorPayload!]!
  isSuccessful: Boolean!
}
```

### Fields

#### `DesPartChangeLifecycleStatePayload.errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object library-management

Errors that occurred while performing the operation.

#### `DesPartChangeLifecycleStatePayload.isSuccessful` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the lifecycle state of the part was changed. Always `false` when `errors` is not empty.
