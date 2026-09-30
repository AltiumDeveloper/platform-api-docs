---
title: "BomItemElement"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element"
bounded_context: "Procurement"
kind: "interfaces"
experimental: false
deprecated: false
---

# BomItemElement

An element (part) that might be used for a particular BOM item.

### Common Data Model

- [BOM Item Element](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemElement/) — An element (part) that might be used for a particular BOM item.

### Member Of

[`BomItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item.md) object

### Implemented By

[`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) object · [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) object

```graphql
interface BomItemElement {
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

#### `BomItemElement.attributeValues` · [`[BomItemElementAttributeValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) non-null interface procurement

Values of custom element attributes.

#### `BomItemElement.componentReference` · [`BomComponentReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-component-reference.md) object procurement

A reference to a linked component.

#### `BomItemElement.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the element.

#### `BomItemElement.elementId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique ID of the element.

#### `BomItemElement.issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object procurement

Issues associated with the element.

#### `BomItemElement.manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer name.

#### `BomItemElement.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

MPN stands for Manufacturer Part Number. It is a unique identifier issued by manufacturers that identifies individual products.

#### `BomItemElement.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the element.

#### `BomItemElement.partId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Identifier of the linked part.

#### `BomItemElement.partReference` · [`BomPartReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-part-reference.md) union procurement

A reference to a linked part.

#### `BomItemElement.selectedOffer` · [`BomSelectedElementOffer`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer.md) object procurement

Selected offer of the element.
