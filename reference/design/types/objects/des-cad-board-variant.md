---
title: "DesCadBoardVariant"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variant"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardVariant

Information about a variant of the CAD board.

### Member Of

[`DesCadBoardVariants`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variants.md) object

```graphql
type DesCadBoardVariant {
  description: String
  name: String
  properties: [DesCadProperty!]
  uniqueId: String
  variations: [DesCadComponentVariation!]
}
```

### Fields

#### `DesCadBoardVariant.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board variant description.

#### `DesCadBoardVariant.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board variant name.

#### `DesCadBoardVariant.properties` · [`[DesCadProperty!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-property.md) list object design

CAD board variant properties.

#### `DesCadBoardVariant.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board variant unique identifier.

#### `DesCadBoardVariant.variations` · [`[DesCadComponentVariation!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-variation.md) list object design

CAD board variant variations.
