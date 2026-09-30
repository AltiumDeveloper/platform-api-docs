---
title: "BomItemSubstitute"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItemSubstitute

Substitute is a replacement of a part by another within an individual BOM.

### Common Data Model

- [BOM Item Substitute](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemSubstitute/) — Substitute is a replacement of a part by another within an individual BOM.

### Interfaces

#### [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface procurement

An element (part) that might be used for a particular BOM item.

```graphql
type BomItemSubstitute implements BomItemElement {
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

#### `BomItemSubstitute.attributeValues` · [`[BomItemElementAttributeValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) non-null interface procurement

Values of custom element attributes.

#### `BomItemSubstitute.componentReference` · [`BomComponentReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-component-reference.md) object procurement

A reference to a linked component.

#### `BomItemSubstitute.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the element.

#### `BomItemSubstitute.elementId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique ID of the element.

#### `BomItemSubstitute.issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object procurement

Issues associated with the element.

#### `BomItemSubstitute.manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer name.

#### `BomItemSubstitute.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

MPN stands for Manufacturer Part Number. It is a unique identifier issued by manufacturers that identifies individual products.

#### `BomItemSubstitute.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the element.

#### `BomItemSubstitute.partId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Identifier of the linked part.

#### `BomItemSubstitute.partReference` · [`BomPartReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-part-reference.md) union procurement

A reference to a linked part.

#### `BomItemSubstitute.selectedOffer` · [`BomSelectedElementOffer`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer.md) object procurement

Selected offer of the element.
