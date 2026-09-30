---
title: "BomItemAlternate"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItemAlternate

Alternate is a global replacement of a part by another in all BOMs where it's used.

### Common Data Model

- [BOM Item Alternate](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemAlternate/) — Alternate is a global replacement of a part by another in all BOMs where it's used.

### Interfaces

#### [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface procurement

An element (part) that might be used for a particular BOM item.

```graphql
type BomItemAlternate implements BomItemElement {
  attributeValues: [BomItemElementAttributeValue!]!
  componentReference: BomComponentReference
  description: String!
  elementId: String!
  issues: [BomIssue!]!
  manufacturer: String!
  mpn: String!
  name: String!
  partId: String
  partReference: BomPartReference
  selectedOffer: BomSelectedElementOffer
}
```

### Fields

#### `BomItemAlternate.attributeValues` · [`[BomItemElementAttributeValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) non-null interface procurement

Values of custom element attributes.

#### `BomItemAlternate.componentReference` · [`BomComponentReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-component-reference.md) object procurement

A reference to a linked component.

#### `BomItemAlternate.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the element.

#### `BomItemAlternate.elementId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique ID of the element.

#### `BomItemAlternate.issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object procurement

Issues associated with the element.

#### `BomItemAlternate.manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer name.

#### `BomItemAlternate.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

MPN stands for Manufacturer Part Number. It is a unique identifier issued by manufacturers that identifies individual products.

#### `BomItemAlternate.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the element.

#### `BomItemAlternate.partId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Identifier of the linked part.

#### `BomItemAlternate.partReference` · [`BomPartReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-part-reference.md) union procurement

A reference to a linked part.

#### `BomItemAlternate.selectedOffer` · [`BomSelectedElementOffer`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer.md) object procurement

Selected offer of the element.
