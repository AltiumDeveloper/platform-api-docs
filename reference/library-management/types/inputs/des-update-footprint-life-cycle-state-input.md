---
title: "DesUpdateFootprintLifeCycleStateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-footprint-life-cycle-state-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateFootprintLifeCycleStateInput

Input to update footprint life cycle state.

### Member Of

[`desUpdateFootprintLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-footprint-life-cycle-state.md) mutation

```graphql
input DesUpdateFootprintLifeCycleStateInput {
  comment: String
  footprintId: ID!
  lifeCycleStateTransitionId: String!
}
```

### Fields

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment.

#### `footprintId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Footprint identifier.

#### `lifeCycleStateTransitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Life cycle transition state identifier.
