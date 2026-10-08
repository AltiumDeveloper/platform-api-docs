---
title: "DesLifecycleStateUpgradeOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-lifecycle-state-upgrade-operation-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLifecycleStateUpgradeOperationFilterInput

Filter input type for lifecycle state names.

### Member Of

[`DesComponentUpgradeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-upgrade-filter-input.md) input

```graphql
input DesLifecycleStateUpgradeOperationFilterInput {
  eq: String
  in: [String!]
  neq: String
  notIn: [String!]
}
```

### Fields

#### `eq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Equals.

#### `in` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Is one of the given strings.

#### `neq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Not equals.

#### `notIn` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Is not one of the given strings.
