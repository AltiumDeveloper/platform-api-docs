---
title: "DesPartDocumentCollection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document-collection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartDocumentCollection

Represents a collection of part documents.

### Member Of

[`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

```graphql
type DesPartDocumentCollection {
  documents: [DesPartDocument!]!
  name: String!
}
```

### Fields

#### `DesPartDocumentCollection.documents` · [`[DesPartDocument!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document.md) non-null object library-management

A collection of documents in the group.

#### `DesPartDocumentCollection.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the group (e.g., Datasheets).
