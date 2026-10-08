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

#### `documents` · [`[DesPartDocument!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document.md) non-null object

A collection of documents in the group.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the group (e.g., Datasheets).
