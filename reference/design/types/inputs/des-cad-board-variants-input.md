---
title: "DesCadBoardVariantsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variants-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardVariantsInput

Input for CAD board variants.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardVariantsInput {
  componentTypeVariantLibrary: [DesCadBoardComponentTypeInput!]
  variants: [DesCadBoardVariantInput!]
}
```

### Fields

#### `componentTypeVariantLibrary` · [`[DesCadBoardComponentTypeInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-type-input.md) list input

Component type variant library for CAD board variants.

#### `variants` · [`[DesCadBoardVariantInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variant-input.md) list input

Variants for CAD board variants.
