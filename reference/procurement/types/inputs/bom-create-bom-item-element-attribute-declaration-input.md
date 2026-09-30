---
title: "BomCreateBomItemElementAttributeDeclarationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-declaration-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomItemElementAttributeDeclarationInput

Describes a BOM item element's attribute.

### Member Of

[`BomCreateBomInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-input.md) input

```graphql
input BomCreateBomItemElementAttributeDeclarationInput {
  attributeId: String!
  name: String!
  type: BomItemElementCustomAttributeType!
}
```

### Fields

#### `BomCreateBomItemElementAttributeDeclarationInput.attributeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A transient identifier that uniquely identifies this attribute within the current mutation call. This ID is used to correlate this attribute with attribute values in BOM item elements.

#### `BomCreateBomItemElementAttributeDeclarationInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the attribute.

#### `BomCreateBomItemElementAttributeDeclarationInput.type` · [`BomItemElementCustomAttributeType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/enums/bom-item-element-custom-attribute-type.md) non-null enum procurement

Type of the attribute. The actual attribute values may have different types.
