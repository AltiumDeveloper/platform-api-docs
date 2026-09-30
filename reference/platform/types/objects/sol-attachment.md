---
title: "SolAttachment"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-attachment"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# SolAttachment

### Member Of

[`SolAddAttachmentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-add-attachment-payload.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object

```graphql
type SolAttachment {
  attachmentId: String!
  name: String!
  size: Long!
  type: String!
  uploadedAt: DateTime!
  uploadedBy: DesWorkspaceUser
  uploadedById: ID! @deprecated
  url: String!
}
```

### Fields

#### `SolAttachment.attachmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique identifier of the attachment.

#### `SolAttachment.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display name of the attachment.

#### `SolAttachment.size` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

Size of the attachment represented in bytes.

#### `SolAttachment.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Type of the attachment.

#### `SolAttachment.uploadedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `SolAttachment.uploadedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

#### `SolAttachment.url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

URL to access the attachment.

#### Deprecated

#### `SolAttachment.uploadedById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.
