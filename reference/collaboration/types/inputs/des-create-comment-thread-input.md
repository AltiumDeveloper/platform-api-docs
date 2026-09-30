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

#### `DesCreateCommentThreadInput.area` · [`DesRectangleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-rectangle-input.md) input design

Comment thread area.

#### `DesCreateCommentThreadInput.commentContextType` · [`DesCommentContextType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-comment-context-type.md) non-null enum collaboration

Comment thread comment context type.

#### `DesCreateCommentThreadInput.documentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment thread document identifier.

#### `DesCreateCommentThreadInput.documentName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment thread document name.

#### `DesCreateCommentThreadInput.documentType` · [`DesDocumentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-document-type.md) non-null enum collaboration

Comment thread document type.

#### `DesCreateCommentThreadInput.entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Comment thread entity identifier.

#### `DesCreateCommentThreadInput.itemAsDesignItemPcbUniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment thread item as design item PCB reference identifier.

#### `DesCreateCommentThreadInput.itemAsDesignItemSchUniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment thread item as design item schematic reference identifier.

#### `DesCreateCommentThreadInput.itemAsInternalObjectId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment thread item as internal object identifier.

#### `DesCreateCommentThreadInput.releaseId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment thread release identifier.

#### `DesCreateCommentThreadInput.text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment thread text.
