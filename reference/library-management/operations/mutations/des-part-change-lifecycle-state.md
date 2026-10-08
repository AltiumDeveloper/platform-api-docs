---
title: "desPartChangeLifecycleState"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-change-lifecycle-state"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartChangeLifecycleState

Moves a part to another lifecycle state.

### Type

#### [`DesPartChangeLifecycleStatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-change-lifecycle-state-payload.md) object

Represents the payload returned after changing the lifecycle state of a part.

```graphql
desPartChangeLifecycleState(
  input: DesPartChangeLifecycleStateInput!
): DesPartChangeLifecycleStatePayload!
```

### Arguments

#### `input` · [`DesPartChangeLifecycleStateInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-change-lifecycle-state-input.md) non-null input

The part to move and the lifecycle state to move it to.
