---
title: "GloNtfSendEmailInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-ntf-send-email-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloNtfSendEmailInput

### Member Of

[`gloNtfSendEmail`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-ntf-send-email.md) mutation

```graphql
input GloNtfSendEmailInput {
  attachments: [GloNtfEmailAttachmentInput!]
  bcc: [String!]
  body: String!
  bodyFormat: GloNtfBodyEmailFormat!
  cc: [String!]
  from: String!
  subject: String!
  to: [String!]!
}
```

### Fields

#### `GloNtfSendEmailInput.attachments` · [`[GloNtfEmailAttachmentInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-ntf-email-attachment-input.md) list input platform

Optional file attachments.

#### `GloNtfSendEmailInput.bcc` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Recipients' BCC addresses.

#### `GloNtfSendEmailInput.body` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Body of the email.

#### `GloNtfSendEmailInput.bodyFormat` · [`GloNtfBodyEmailFormat!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-ntf-body-email-format.md) non-null enum platform

Format of the body.

#### `GloNtfSendEmailInput.cc` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Recipients' CC addresses.

#### `GloNtfSendEmailInput.from` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Sender address.

#### `GloNtfSendEmailInput.subject` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Subject of the email.

#### `GloNtfSendEmailInput.to` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Recipients' addresses.
