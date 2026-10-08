---
title: "DesDeleteFolderPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-delete-folder-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteFolderPayload

Payload associated with deleting a folder.

### Returned By

[`desDeleteFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-folder.md) mutation

```graphql
type DesDeleteFolderPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
