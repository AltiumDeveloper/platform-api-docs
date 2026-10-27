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

- [BOM Item](https://w3id.org/altium/cdm/procurement/BomItem) — One line of a BOM: its designators and quantity, the primary manufacturer part used for it (identified by manufacturer and manufacturer part number), and any alternate parts recorded for that line. A line can be linked to a Workspace component that lists its part among its Part Choices, and BOM checks report issues against individual lines.
  - IRI: [`https://w3id.org/altium/cdm/procurement/BomItem`](https://w3id.org/altium/cdm/procurement/BomItem)

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

#### `designators` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A list of designators that specify the placements of the item within the schematic.

#### `elements` · [`[BomItemElement!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) non-null interface

All elements that could be used for this item (alternates and substitutes).

#### `extraQuantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Extra quantity of the item to order. This is added to the product of 'Quantity' and 'BOM Production Quantity' to calculate the 'Total Quantity'.

#### `hiddenElements` · [`[BomItemElement!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) non-null interface

Elements that were hidden from the 'elements' list.

#### `issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object

Issues associated with the item.

#### `itemId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the item. Items preserve their ID across releases of the BOM.

#### `primaryElement` · [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface

The primary element chosen for this item.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The quantity of the item required to produce one unit.

#### `totalQuantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The total quantity of the item to order, calculated as "(Quantity \* BOM Production Quantity) + Extra Quantity".

#### Deprecated

#### `componentReference` · [`BomComponentReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-component-reference.md) **DEPRECATED** object

> **Deprecated:** Use 'primaryElement.componentReference' instead.

A reference to a component linked to the primary element.
