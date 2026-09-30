---
title: "GloNtfPayloadError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-ntf-payload-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloNtfPayloadError

Represents the information about a payload error.

### Member Of

[`GloNtfSendEmailPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-ntf-send-email-payload.md) object

### Interfaces

#### [`GloNtfError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-ntf-error.md) interface platform

Represents the information about an error.

```graphql
type GloNtfPayloadError implements GloNtfError {
  message: String!
}
```

### Fields

#### `GloNtfPayloadError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the error occurred.
