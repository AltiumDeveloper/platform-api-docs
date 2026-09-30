---
title: "DesPartUploadLibraryPartsColumnMapping"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-column-mapping"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadLibraryPartsColumnMapping

Maps file columns to part fields.

### Member Of

[`DesPartUploadOperationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-operation-payload.md) object

```graphql
type DesPartUploadLibraryPartsColumnMapping {
  categoryNameColumn: String
  datasheetUrlColumn: String
  descriptionColumn: String
  documents: [DesPartDocumentMapping!]
  imageUrlColumn: String
  manufacturerNameColumn: String
  mpnColumn: String
  sellers: [DesPartSellerMapping!]
  specs: [DesPartSpecMapping!]
}
```

### Fields

#### `DesPartUploadLibraryPartsColumnMapping.categoryNameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for category name.

#### `DesPartUploadLibraryPartsColumnMapping.datasheetUrlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for datasheet URL.

#### `DesPartUploadLibraryPartsColumnMapping.descriptionColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for description.

#### `DesPartUploadLibraryPartsColumnMapping.documents` · [`[DesPartDocumentMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document-mapping.md) list object library-management

Document mappings.

#### `DesPartUploadLibraryPartsColumnMapping.imageUrlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for image URL.

#### `DesPartUploadLibraryPartsColumnMapping.manufacturerNameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for manufacturer name.

#### `DesPartUploadLibraryPartsColumnMapping.mpnColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for MPN.

#### `DesPartUploadLibraryPartsColumnMapping.sellers` · [`[DesPartSellerMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-mapping.md) list object library-management

Seller mappings.

#### `DesPartUploadLibraryPartsColumnMapping.specs` · [`[DesPartSpecMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-spec-mapping.md) list object library-management

Spec mappings.
