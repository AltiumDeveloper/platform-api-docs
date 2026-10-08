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

- [BOM Item Alternate](https://w3id.org/altium/cdm/procurement/BomItemAlternate) — An alternate part recorded for one BOM line: another manufacturer part that could be used instead of the line's primary part. Alternates belong to the individual BOM line rather than applying across BOMs. They can come from an uploaded BOM file, be added by hand, or be filled in automatically from the linked component's Part Choices and from suggested alternates, and an alternate can be promoted to become the line's primary part.
  - IRI: [`https://w3id.org/altium/cdm/procurement/BomItemAlternate`](https://w3id.org/altium/cdm/procurement/BomItemAlternate)

### Interfaces

#### [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface

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
