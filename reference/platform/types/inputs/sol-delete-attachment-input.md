---
title: "SolDeleteAttachmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-delete-attachment-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolDeleteAttachmentInput

### Member Of

[`solDeleteAttachment`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-delete-attachment.md) mutation

```graphql
input SolDeleteAttachmentInput {
  id: String!
  solutionId: ID!
}
```

### Fields

#### `SolDeleteAttachmentInput.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique identifier of the attachment to be deleted.

#### `SolDeleteAttachmentInput.solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

ID of the solution from which the attachment will be deleted.
