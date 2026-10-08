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

#### `attachments` · [`[GloNtfEmailAttachmentInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-ntf-email-attachment-input.md) list input

Optional file attachments.

#### `bcc` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Recipients' BCC addresses.

#### `body` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Body of the email.

#### `bodyFormat` · [`GloNtfBodyEmailFormat!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-ntf-body-email-format.md) non-null enum

Format of the body.

#### `cc` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Recipients' CC addresses.

#### `from` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Sender address.

#### `subject` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Subject of the email.

#### `to` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Recipients' addresses.
