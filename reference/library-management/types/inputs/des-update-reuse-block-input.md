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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Reuse block description.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Reuse block identifier.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Reuse block name.
