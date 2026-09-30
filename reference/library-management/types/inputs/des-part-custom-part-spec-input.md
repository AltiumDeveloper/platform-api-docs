---
title: "DesPartCustomPartSpecInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-spec-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartCustomPartSpecInput

Represents a custom part specification.

### Member Of

[`DesPartCustomPartDataInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-data-input.md) input

```graphql
input DesPartCustomPartSpecInput {
  name: String!
  value: String!
}
```

### Fields

#### `DesPartCustomPartSpecInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The display name.

#### `DesPartCustomPartSpecInput.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The value.
