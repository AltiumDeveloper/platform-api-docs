---
title: "DesPartDocument"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartDocument

Represents a part document.

### Member Of

[`DesPartDocumentCollection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document-collection.md) object

```graphql
type DesPartDocument {
  mimeType: String!
  name: String!
  url: URL!
}
```

### Fields

#### `DesPartDocument.mimeType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The MIME type of the document.

#### `DesPartDocument.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the document.

#### `DesPartDocument.url` · [`URL!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/url.md) non-null scalar common

The URL of the document.
