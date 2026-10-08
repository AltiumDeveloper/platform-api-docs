---
title: "DesCadBoardVariants"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variants"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardVariants

Information about variants of the CAD board.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardVariants {
  componentTypeVariantLibrary: [DesCadBoardComponentType!]
  variants: [DesCadBoardVariant!]
}
```

### Fields

#### `componentTypeVariantLibrary` · [`[DesCadBoardComponentType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) list object

Component type variant library for CAD board variants.

#### `variants` · [`[DesCadBoardVariant!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variant.md) list object

CAD board variants.
