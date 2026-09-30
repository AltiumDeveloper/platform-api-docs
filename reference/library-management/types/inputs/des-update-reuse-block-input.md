---
title: "DesUpdateReuseBlockInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-reuse-block-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateReuseBlockInput

Input to update reuse block.

### Member Of

[`desUpdateReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-reuse-block.md) mutation

```graphql
input DesUpdateReuseBlockInput {
  description: String
  id: ID!
  name: String
}
```

### Fields

#### `DesUpdateReuseBlockInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Reuse block description.

#### `DesUpdateReuseBlockInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Reuse block identifier.

#### `DesUpdateReuseBlockInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Reuse block name.
