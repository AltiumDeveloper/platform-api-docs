---
title: "DesMoveFolderPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-move-folder-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesMoveFolderPayload

Payload associated with moving a folder.

### Returned By

[`desMoveFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-move-folder.md) mutation

```graphql
type DesMoveFolderPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesMoveFolderPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
