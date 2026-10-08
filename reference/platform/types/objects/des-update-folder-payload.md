---
title: "DesUpdateFolderPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-folder-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateFolderPayload

Payload associated with updating a folder.

### Returned By

[`desUpdateFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-folder.md) mutation

```graphql
type DesUpdateFolderPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
