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

#### `BomCreateBomItemElementInput.attributeValues` · [`[BomCreateBomItemElementAttributeInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-input.md) list input procurement

Values of custom element attributes.

#### `BomCreateBomItemElementInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Description of the element.

#### `BomCreateBomItemElementInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of the element.

#### `BomCreateBomItemElementInput.offer` · [`BomCreateBomOfferReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-offer-reference-input.md) input procurement

An offer selected for this element.

#### `BomCreateBomItemElementInput.part` · [`BomCreateBomPartReferenceInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-part-reference-input.md) non-null input procurement

A part associated with this element.
