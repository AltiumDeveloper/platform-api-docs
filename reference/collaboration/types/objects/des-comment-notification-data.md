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

#### `DesCommentNotificationData.commentAuthor` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment author.

#### `DesCommentNotificationData.commentDate` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment date.

#### `DesCommentNotificationData.commentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment identifier.

#### `DesCommentNotificationData.commentText` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment text.

#### `DesCommentNotificationData.commentThreadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment thread identifier.

#### `DesCommentNotificationData.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment notification document identifier.

#### `DesCommentNotificationData.documentName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment notification document name.

#### `DesCommentNotificationData.projectId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment notification project identifier.

#### `DesCommentNotificationData.threadData` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment thread data.

#### `DesCommentNotificationData.threadDate` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment thread date.

#### `DesCommentNotificationData.threadStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment thread status.
