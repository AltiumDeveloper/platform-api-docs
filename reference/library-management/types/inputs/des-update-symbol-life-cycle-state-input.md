---
title: "DesUpdateSymbolLifeCycleStateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-symbol-life-cycle-state-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateSymbolLifeCycleStateInput

Input to update symbol life cycle state.

### Member Of

[`desUpdateSymbolLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-symbol-life-cycle-state.md) mutation

```graphql
input DesUpdateSymbolLifeCycleStateInput {
  comment: String
  lifeCycleStateTransitionId: String!
  symbolId: ID!
}
```

### Fields

#### `DesUpdateSymbolLifeCycleStateInput.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment.

#### `DesUpdateSymbolLifeCycleStateInput.lifeCycleStateTransitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Life cycle transition state identifier.

#### `DesUpdateSymbolLifeCycleStateInput.symbolId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Symbol identifier.
