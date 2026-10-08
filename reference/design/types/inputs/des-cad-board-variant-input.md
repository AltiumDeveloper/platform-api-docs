---
title: "DesCadBoardVariantInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variant-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardVariantInput

Input for CAD board variant.

### Member Of

[`DesCadBoardVariantsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variants-input.md) input

```graphql
input DesCadBoardVariantInput {
  description: String
  name: String
  properties: [DesCadPropertyInput!]
  uniqueId: String
  variations: [DesCadComponentVariationInput!]
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board variant description.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board variant name.

#### `properties` · [`[DesCadPropertyInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-property-input.md) list input

CAD board variant properties.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Unique identifier for CAD board variant.

#### `variations` · [`[DesCadComponentVariationInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-component-variation-input.md) list input

CAD board variant variations.
