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

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Original file name.

#### `fileToken` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The token used to access the script package file.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name of the attachment.

#### `solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

ID of the solution to which the attachment will be added.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Type of the attachment.
