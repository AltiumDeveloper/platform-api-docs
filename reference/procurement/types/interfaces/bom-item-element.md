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

- [BOM Item Element](https://w3id.org/altium/cdm/procurement/BomItemElement) — An element (part) that might be used for a particular BOM item.
  - IRI: [`https://w3id.org/altium/cdm/procurement/BomItemElement`](https://w3id.org/altium/cdm/procurement/BomItemElement)

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

#### `attributeValues` · [`[BomItemElementAttributeValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) non-null interface

Values of custom element attributes.

#### `componentReference` · [`BomComponentReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-component-reference.md) object

A reference to a linked component.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the element.

#### `elementId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Unique ID of the element.

#### `issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object

Issues associated with the element.

#### `manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacturer name.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

MPN stands for Manufacturer Part Number. It is a unique identifier issued by manufacturers that identifies individual products.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the element.

#### `partId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifier of the linked part.

#### `partReference` · [`BomPartReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-part-reference.md) union

A reference to a linked part.

#### `selectedOffer` · [`BomSelectedElementOffer`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer.md) object

Selected offer of the element.
