---
title: "BomCreateBomItemInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomItemInput

BOM items are the components of a product.

### Member Of

[`BomCreateBomInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-input.md) input

```graphql
input BomCreateBomItemInput {
  designators: [String!]!
  elements: [BomCreateBomItemElementInput!]!
  extraQuantity: Int
  quantity: Int!
}
```

### Fields

#### `designators` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A list of designators that specify the placements of the item within the schematic.

#### `elements` · [`[BomCreateBomItemElementInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-input.md) non-null input

All elements that could be used for this item.

#### `extraQuantity` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Extra quantity of the item to order. This is added to the product of 'Quantity' and 'BOM Production Quantity' to calculate the 'Total Quantity'.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The quantity of the item required to produce one unit.
