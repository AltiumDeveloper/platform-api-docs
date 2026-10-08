---
title: "DesPartCustomPartSellerSpecInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-spec-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartCustomPartSellerSpecInput

Represents a specification for a seller.

### Member Of

[`DesPartCustomPartSellerInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-input.md) input

```graphql
input DesPartCustomPartSellerSpecInput {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The display name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value.
