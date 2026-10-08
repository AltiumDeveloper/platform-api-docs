---
title: "BomCreateBomItemElementInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomItemElementInput

An element (part) that might be used for a particular BOM item.

### Member Of

[`BomCreateBomItemInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-input.md) input

```graphql
input BomCreateBomItemElementInput {
  attributeValues: [BomCreateBomItemElementAttributeInput!]
  description: String
  name: String
  offer: BomCreateBomOfferReferenceInput
  part: BomCreateBomPartReferenceInput!
}
```

### Fields

#### `attributeValues` · [`[BomCreateBomItemElementAttributeInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-input.md) list input

Values of custom element attributes.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Description of the element.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the element.

#### `offer` · [`BomCreateBomOfferReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-offer-reference-input.md) input

An offer selected for this element.

#### `part` · [`BomCreateBomPartReferenceInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-part-reference-input.md) non-null input

A part associated with this element.
