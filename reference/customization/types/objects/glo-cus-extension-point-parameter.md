---
title: "GloCusExtensionPointParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point-parameter"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusExtensionPointParameter

### Member Of

[`GloCusExtensionPoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point.md) object

```graphql
type GloCusExtensionPointParameter {
  description: String
  name: String!
  predefinedValues: [GloCusPredefinedValue!]!
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `predefinedValues` · [`[GloCusPredefinedValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-predefined-value.md) non-null object
