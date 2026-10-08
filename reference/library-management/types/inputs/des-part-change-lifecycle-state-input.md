---
title: "DesPartChangeLifecycleStateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-change-lifecycle-state-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartChangeLifecycleStateInput

Represents the input for changing the lifecycle state of a part.

### Member Of

[`desPartChangeLifecycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-change-lifecycle-state.md) mutation

```graphql
input DesPartChangeLifecycleStateInput {
  partId: ID!
  transitionLifecycleStateId: String!
}
```

### Fields

#### `partId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the part.

#### `transitionLifecycleStateId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the lifecycle state the part is moved to.
