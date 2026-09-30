---
title: "DesPartSpecMapping"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-spec-mapping"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSpecMapping

Maps a file column to a spec value.

### Member Of

[`DesPartUploadLibraryPartsColumnMapping`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-column-mapping.md) object

```graphql
type DesPartSpecMapping {
  nameColumn: String!
  valueColumn: String!
}
```

### Fields

#### `DesPartSpecMapping.nameColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The spec name header.

#### `DesPartSpecMapping.valueColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The value column header.
