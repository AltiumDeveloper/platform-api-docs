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

#### `categoryNameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for category name.

#### `datasheetUrlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for datasheet URL.

#### `descriptionColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for description.

#### `documents` · [`[DesPartDocumentMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document-mapping.md) list object

Document mappings.

#### `imageUrlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for image URL.

#### `manufacturerNameColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for manufacturer name.

#### `mpnColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for MPN.

#### `sellers` · [`[DesPartSellerMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-mapping.md) list object

Seller mappings.

#### `specs` · [`[DesPartSpecMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-spec-mapping.md) list object

Spec mappings.
