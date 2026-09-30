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

#### `BomCreateBomInput.countryCode` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

A country associated with the BOM. It is primarily used to provide region-specific information about parts.

#### `BomCreateBomInput.currencyCode` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

A currency associated with the BOM. Prices in the BOM are provided in this currency.

#### `BomCreateBomInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Description of the BOM.

#### `BomCreateBomInput.folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

An optional identifier of the folder the BOM should be saved to.

#### `BomCreateBomInput.itemElementAttributes` · [`[BomCreateBomItemElementAttributeDeclarationInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-declaration-input.md) list input procurement

A list of custom BOM item element's attributes.

#### `BomCreateBomInput.items` · [`[BomCreateBomItemInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-input.md) non-null input procurement

BOM items.

#### `BomCreateBomInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the BOM.

#### `BomCreateBomInput.packagingPriorities` · [`BomCreateBomPackagingPrioritiesSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-packaging-priorities-settings-input.md) input procurement

Specifies priorities of different packaging types. This affects the offer selection in the order list.

#### `BomCreateBomInput.production` · [`BomCreateBomProductionSettingsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-production-settings-input.md) input procurement

Production-related settings of a BOM (e.g., a 'production quantity' or a 'due date').

#### `BomCreateBomInput.suppliers` · [`[BomCreateBomSupplierReferenceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-supplier-reference-input.md) list input procurement

The list of suppliers to use for this BOM.

#### `BomCreateBomInput.tolerateMissingReferences` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

If set to true, the mutation tolerates missing references instead of failing.

Suppliers: Missing ones won’t be added to the BOM. Parts: BOM items with a non-existing part reference will remain unmapped. Offers: Another available offer will be selected instead.
