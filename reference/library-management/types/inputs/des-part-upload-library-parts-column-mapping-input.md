---
title: "DesPartUploadLibraryPartsColumnMappingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-library-parts-column-mapping-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartUploadLibraryPartsColumnMappingInput

Maps file columns to part fields.

### Member Of

[`DesPartUploadLibraryPartsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-library-parts-input.md) input

```graphql
input DesPartUploadLibraryPartsColumnMappingInput {
  categoryNameColumn: String
  datasheetUrlColumn: String
  descriptionColumn: String
  documents: [DesPartDocumentMappingInput!]
  imageUrlColumn: String
  manufacturerNameColumn: String
  mpnColumn: String
  sellers: [DesPartSellerMappingInput!]
  specs: [DesPartSpecMappingInput!]
}
```

### Fields

#### `categoryNameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for category name.

#### `datasheetUrlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for datasheet URL.

#### `descriptionColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for description.

#### `documents` · [`[DesPartDocumentMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-document-mapping-input.md) list input

Document mappings.

#### `imageUrlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for image URL.

#### `manufacturerNameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for manufacturer name.

#### `mpnColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for MPN.

#### `sellers` · [`[DesPartSellerMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-seller-mapping-input.md) list input

Seller mappings.

#### `specs` · [`[DesPartSpecMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-spec-mapping-input.md) list input

Spec mappings.
