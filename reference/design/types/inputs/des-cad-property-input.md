---
title: "DesCadPropertyInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-property-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadPropertyInput

Input for CAD property.

### Member Of

[`DesCadBoardComponentTypeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-type-input.md) input · [`DesCadBoardVariantInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variant-input.md) input · [`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadPropertyInput {
  name: String!
  value: String
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

CAD property name.

#### `value` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD property value.
