---
title: "DesUpdatePermissionsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-permissions-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdatePermissionsPayload

### Returned By

[`desUpdatePermissions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-permissions.md) mutation

```graphql
type DesUpdatePermissionsPayload {
  isUpdated: Boolean!
}
```

### Fields

#### `isUpdated` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the permissions were updated successfully.
