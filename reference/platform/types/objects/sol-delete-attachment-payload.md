---
title: "SolDeleteAttachmentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-delete-attachment-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# SolDeleteAttachmentPayload

### Returned By

[`solDeleteAttachment`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-delete-attachment.md) mutation

```graphql
type SolDeleteAttachmentPayload {
  isDeleted: Boolean!
}
```

### Fields

#### `isDeleted` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether deletion completed successfuly.
