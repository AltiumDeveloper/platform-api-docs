---
title: "SolAddAttachmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-add-attachment-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolAddAttachmentInput

### Member Of

[`solAddAttachment`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-add-attachment.md) mutation

```graphql
input SolAddAttachmentInput {
  fileName: String!
  fileToken: String!
  name: String!
  solutionId: ID!
  type: String!
}
```

### Fields

#### `SolAddAttachmentInput.fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Original file name.

#### `SolAddAttachmentInput.fileToken` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The token used to access the script package file.

#### `SolAddAttachmentInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display name of the attachment.

#### `SolAddAttachmentInput.solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

ID of the solution to which the attachment will be added.

#### `SolAddAttachmentInput.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Type of the attachment.
