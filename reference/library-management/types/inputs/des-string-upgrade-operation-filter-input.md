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

#### `DesStringUpgradeOperationFilterInput.contains` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Contains the given string.

#### `DesStringUpgradeOperationFilterInput.endsWith` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Ends with the given string.

#### `DesStringUpgradeOperationFilterInput.eq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Equals.

#### `DesStringUpgradeOperationFilterInput.in` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Is one of the given strings.

#### `DesStringUpgradeOperationFilterInput.neq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Not equals.

#### `DesStringUpgradeOperationFilterInput.notIn` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Is not one of the given strings.

#### `DesStringUpgradeOperationFilterInput.startsWith` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Starts with the given string.
