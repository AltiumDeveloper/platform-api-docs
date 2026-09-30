---
title: "GloNtfSendEmailPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-ntf-send-email-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloNtfSendEmailPayload

### Returned By

[`gloNtfSendEmail`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-ntf-send-email.md) mutation

```graphql
type GloNtfSendEmailPayload {
  errors: [GloNtfPayloadError!]!
}
```

### Fields

#### `GloNtfSendEmailPayload.errors` · [`[GloNtfPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-ntf-payload-error.md) non-null object platform

Errors that occurred during sending an email.
