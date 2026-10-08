---
title: "DesStringUpgradeOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-string-upgrade-operation-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesStringUpgradeOperationFilterInput

String filter input type for component upgrades.

### Member Of

[`DesComponentUpgradeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-upgrade-filter-input.md) input

```graphql
input DesStringUpgradeOperationFilterInput {
  contains: String
  endsWith: String
  eq: String
  in: [String!]
  neq: String
  notIn: [String!]
  startsWith: String
}
```

### Fields

#### `contains` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Contains the given string.

#### `endsWith` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Ends with the given string.

#### `eq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Equals.

#### `in` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Is one of the given strings.

#### `neq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Not equals.

#### `notIn` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Is not one of the given strings.

#### `startsWith` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Starts with the given string.
