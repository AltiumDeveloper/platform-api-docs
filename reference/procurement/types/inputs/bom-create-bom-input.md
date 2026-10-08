---
title: "BomCreateBomInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomInput

### Member Of

[`bomCreateBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/mutations/bom-create-bom.md) mutation

```graphql
input BomCreateBomInput {
  countryCode: String
  currencyCode: String
  description: String
  folderId: String
  itemElementAttributes: [BomCreateBomItemElementAttributeDeclarationInput!]
  items: [BomCreateBomItemInput!]!
  name: String!
  packagingPriorities: BomCreateBomPackagingPrioritiesSettingsInput
  production: BomCreateBomProductionSettingsInput
  suppliers: [BomCreateBomSupplierReferenceInput!]
  tolerateMissingReferences: Boolean!
}
```

### Fields

#### `countryCode` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

A country associated with the BOM. It is primarily used to provide region-specific information about parts.

#### `currencyCode` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

A currency associated with the BOM. Prices in the BOM are provided in this currency.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Description of the BOM.

#### `folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

An optional identifier of the folder the BOM should be saved to.

#### `itemElementAttributes` · [`[BomCreateBomItemElementAttributeDeclarationInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-declaration-input.md) list input

A list of custom BOM item element's attributes.

#### `items` · [`[BomCreateBomItemInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-input.md) non-null input

BOM items.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the BOM.

#### `packagingPriorities` · [`BomCreateBomPackagingPrioritiesSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-packaging-priorities-settings-input.md) input

Specifies priorities of different packaging types. This affects the offer selection in the order list.

#### `production` · [`BomCreateBomProductionSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-production-settings-input.md) input

Production-related settings of a BOM (e.g., a 'production quantity' or a 'due date').

#### `suppliers` · [`[BomCreateBomSupplierReferenceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-supplier-reference-input.md) list input

The list of suppliers to use for this BOM.

#### `tolerateMissingReferences` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

If set to true, the mutation tolerates missing references instead of failing.

Suppliers: Missing ones won’t be added to the BOM. Parts: BOM items with a non-existing part reference will remain unmapped. Offers: Another available offer will be selected instead.
