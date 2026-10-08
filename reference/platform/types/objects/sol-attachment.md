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

#### `attachmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Unique identifier of the attachment.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name of the attachment.

#### `size` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

Size of the attachment represented in bytes.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Type of the attachment.

#### `uploadedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `uploadedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object

#### `url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

URL to access the attachment.

#### Deprecated

#### `uploadedById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.
