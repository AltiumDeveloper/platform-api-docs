---
title: "DesPartCustomPartDocumentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-document-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartCustomPartDocumentInput

Represents a custom part document.

### Member Of

[`DesPartCustomPartDataInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-data-input.md) input

```graphql
input DesPartCustomPartDocumentInput {
  name: String!
  url: String!
}
```

### Fields

#### `DesPartCustomPartDocumentInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the document.

#### `DesPartCustomPartDocumentInput.url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The URL of the document.
