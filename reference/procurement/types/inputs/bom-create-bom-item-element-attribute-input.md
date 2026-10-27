---
title: "BomCreateBomItemElementAttributeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomItemElementAttributeInput

BOM item element attribute.

### Member Of

[`BomCreateBomItemElementInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-input.md) input

```graphql
input BomCreateBomItemElementAttributeInput {
  attributeId: String!
  value: BomCreateBomItemElementAttributeValueInput!
}
```

### Fields

#### `attributeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A transient identifier that uniquely identifies this attribute within the current mutation call. This ID is used to correlate this attribute with the corresponding attribute declaration.

#### `value` · [`BomCreateBomItemElementAttributeValueInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-value-input.md) non-null input

Value of the attribute.
