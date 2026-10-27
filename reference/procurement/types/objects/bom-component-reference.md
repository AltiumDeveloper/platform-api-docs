---
title: "BomComponentReference"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-component-reference"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomComponentReference

A reference to a component.

### Member Of

[`BomItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item.md) object · [`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) object · [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface · [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) object

```graphql
type BomComponentReference {
  componentId: String!
  componentRevisionId: String!
}
```

### Fields

#### `componentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the referenced component.

#### `componentRevisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the referenced component revision.
