---
title: "DesCommentNotificationData"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-notification-data"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCommentNotificationData

Information contained in comment notification data.

### Member Of

[`DesCommentNotification`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-notification.md) object

```graphql
type DesCommentNotificationData {
  commentAuthor: String
  commentDate: String!
  commentId: String!
  commentText: String
  commentThreadId: String!
  documentId: String
  documentName: String
  projectId: String!
  threadData: String
  threadDate: String!
  threadStatus: String
}
```

### Fields

#### `commentAuthor` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment author.

#### `commentDate` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment date.

#### `commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment identifier.

#### `commentText` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment text.

#### `commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment thread identifier.

#### `documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment notification document identifier.

#### `documentName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment notification document name.

#### `projectId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment notification project identifier.

#### `threadData` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment thread data.

#### `threadDate` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment thread date.

#### `threadStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment thread status.
