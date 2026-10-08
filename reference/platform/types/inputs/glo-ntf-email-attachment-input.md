---
title: "GloNtfEmailAttachmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-ntf-email-attachment-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloNtfEmailAttachmentInput

### Member Of

[`GloNtfSendEmailInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-ntf-send-email-input.md) input

```graphql
input GloNtfEmailAttachmentInput {
  fileName: String!
  id: String!
}
```

### Fields

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the file as it should appear in the email attachment.

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the previously uploaded file to attach.
