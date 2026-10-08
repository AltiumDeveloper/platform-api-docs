---
title: "DesAnnotationDocumentBinding"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-document-binding"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesAnnotationDocumentBinding

### Implemented By

[`DesAnnotationBinding`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/unions/des-annotation-binding.md) union

```graphql
type DesAnnotationDocumentBinding {
  documentName: String!
  documentType: String!
}
```

### Fields

#### `documentName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the document where the annotation is placed.

#### `documentType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Type of the document where the annotation is placed.
