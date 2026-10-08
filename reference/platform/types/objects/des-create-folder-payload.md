---
title: "DesCreateFolderPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-create-folder-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateFolderPayload

Payload associated with creating a folder.

### Returned By

[`desCreateFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-folder.md) mutation

```graphql
type DesCreateFolderPayload {
  errors: [DesPayloadError!]!
  folderId: String
  id: ID @deprecated
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Reference identifier of the created folder.

#### Deprecated

#### `id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Use `folderId` instead.
