---
title: "DesPartSpecMappingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-spec-mapping-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSpecMappingInput

Maps a file column to a spec value.

### Member Of

[`DesPartUploadLibraryPartsColumnMappingInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-library-parts-column-mapping-input.md) input

```graphql
input DesPartSpecMappingInput {
  nameColumn: String!
  valueColumn: String!
}
```

### Fields

#### `nameColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The spec name header.

#### `valueColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value column header.
