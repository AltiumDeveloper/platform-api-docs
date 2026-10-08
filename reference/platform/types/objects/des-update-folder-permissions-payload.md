---
title: "DesUpdateFolderPermissionsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-folder-permissions-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateFolderPermissionsPayload

Payload associated with updating folder permissions.

### Returned By

[`desUpdateFolderPermissions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-folder-permissions.md) mutation

```graphql
type DesUpdateFolderPermissionsPayload {
  folderId: ID! @deprecated
}
```

### Fields

#### Deprecated

#### `folderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** This value will soon change from folder node identifier to folder reference identifier (GUID).
