---
title: "BomItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItem

BOM items are the components of a product.

### Common Data Model

- [BOM Item](https://altiumdeveloper.github.io/cdm/classes/pro_BomItem/) — One line of a BOM: its designators and quantity, the primary manufacturer part used for it (identified by manufacturer and manufacturer part number), and any alternate parts recorded for that line. A line can be linked to a Workspace component that lists its part among its Part Choices, and BOM checks report issues against individual lines.

### Member Of

[`BomItemsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-connection.md) object · [`BomItemsEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-edge.md) object

```graphql
type BomItem {
  componentReference: BomComponentReference @deprecated
  designators: [String!]!
  elements: [BomItemElement!]!
  extraQuantity: Int!
  hiddenElements: [BomItemElement!]!
  issues: [BomIssue!]!
  itemId: String!
  primaryElement: BomItemElement
  quantity: Int!
  totalQuantity: Int!
}
```

### Fields

#### `BomItem.designators` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A list of designators that specify the placements of the item within the schematic.

#### `BomItem.elements` · [`[BomItemElement!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) non-null interface procurement

All elements that could be used for this item (alternates and substitutes).

#### `BomItem.extraQuantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Extra quantity of the item to order. This is added to the product of 'Quantity' and 'BOM Production Quantity' to calculate the 'Total Quantity'.

#### `BomItem.hiddenElements` · [`[BomItemElement!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) non-null interface procurement

Elements that were hidden from the 'elements' list.

#### `BomItem.issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object procurement

Issues associated with the item.

#### `BomItem.itemId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the item. Items preserve their ID across releases of the BOM.

#### `BomItem.primaryElement` · [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface procurement

The primary element chosen for this item.

#### `BomItem.quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The quantity of the item required to produce one unit.

#### `BomItem.totalQuantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The total quantity of the item to order, calculated as "(Quantity \* BOM Production Quantity) + Extra Quantity".

#### Deprecated

#### `BomItem.componentReference` · [`BomComponentReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-component-reference.md) **DEPRECATED** object procurement

> **Deprecated:** Use 'primaryElement.componentReference' instead.

A reference to a component linked to the primary element.
