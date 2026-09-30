---
title: "DesDesignItemParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item-parameter"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesDesignItemParameter

A parameter describing the design item.

### Member Of

[`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object

```graphql
type DesDesignItemParameter {
  name: String!
  value: String!
}
```

### Fields

#### `DesDesignItemParameter.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter name.

#### `DesDesignItemParameter.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter value.
