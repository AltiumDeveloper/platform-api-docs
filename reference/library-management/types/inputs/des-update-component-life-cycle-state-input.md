---
title: "DesUpdateComponentLifeCycleStateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-component-life-cycle-state-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateComponentLifeCycleStateInput

Input to update component life cycle state.

### Member Of

[`desUpdateComponentLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-life-cycle-state.md) mutation

```graphql
input DesUpdateComponentLifeCycleStateInput {
  comment: String
  componentId: ID!
  lifeCycleStateTransitionId: String!
}
```

### Fields

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment.

#### `componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Component identifier.

#### `lifeCycleStateTransitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Life cycle transition state identifier.
