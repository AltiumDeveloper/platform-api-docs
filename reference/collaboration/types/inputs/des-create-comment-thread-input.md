---
title: "DesCreateCommentThreadInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-comment-thread-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateCommentThreadInput

Input for comment thread creation.

### Member Of

[`desCreateCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-comment-thread.md) mutation

```graphql
input DesCreateCommentThreadInput {
  area: DesRectangleInput
  commentContextType: DesCommentContextType!
  documentId: String!
  documentName: String
  documentType: DesDocumentType!
  entityId: ID!
  itemAsDesignItemPcbUniqueId: String
  itemAsDesignItemSchUniqueId: String
  itemAsInternalObjectId: String
  releaseId: String
  text: String!
}
```

### Fields

#### `area` · [`DesRectangleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-rectangle-input.md) input Design

Comment thread area.

#### `commentContextType` · [`DesCommentContextType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-comment-context-type.md) non-null enum

Comment thread comment context type.

#### `documentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment thread document identifier.

#### `documentName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment thread document name.

#### `documentType` · [`DesDocumentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-document-type.md) non-null enum

Comment thread document type.

#### `entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Comment thread entity identifier.

#### `itemAsDesignItemPcbUniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment thread item as design item PCB reference identifier.

#### `itemAsDesignItemSchUniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment thread item as design item schematic reference identifier.

#### `itemAsInternalObjectId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment thread item as internal object identifier.

#### `releaseId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment thread release identifier.

#### `text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment thread text.
