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

#### `DesPartUploadLibraryPartsColumnMappingInput.categoryNameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for category name.

#### `DesPartUploadLibraryPartsColumnMappingInput.datasheetUrlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for datasheet URL.

#### `DesPartUploadLibraryPartsColumnMappingInput.descriptionColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for description.

#### `DesPartUploadLibraryPartsColumnMappingInput.documents` · [`[DesPartDocumentMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-document-mapping-input.md) list input library-management

Document mappings.

#### `DesPartUploadLibraryPartsColumnMappingInput.imageUrlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for image URL.

#### `DesPartUploadLibraryPartsColumnMappingInput.manufacturerNameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for manufacturer name.

#### `DesPartUploadLibraryPartsColumnMappingInput.mpnColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for MPN.

#### `DesPartUploadLibraryPartsColumnMappingInput.sellers` · [`[DesPartSellerMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-seller-mapping-input.md) list input library-management

Seller mappings.

#### `DesPartUploadLibraryPartsColumnMappingInput.specs` · [`[DesPartSpecMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-spec-mapping-input.md) list input library-management

Spec mappings.
