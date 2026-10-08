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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board variant description.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board variant name.

#### `properties` · [`[DesCadProperty!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-property.md) list object

CAD board variant properties.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board variant unique identifier.

#### `variations` · [`[DesCadComponentVariation!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-variation.md) list object

CAD board variant variations.
