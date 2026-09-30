---
title: "DesPermissionUpsertInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-permission-upsert-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPermissionUpsertInput

### Member Of

[`DesUpdatePermissionsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-permissions-input.md) input

```graphql
input DesPermissionUpsertInput {
  canEdit: Boolean!
  email: String
  trusteeId: ID
}
```

### Fields

#### `DesPermissionUpsertInput.canEdit` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates read/write permissions.

#### `DesPermissionUpsertInput.email` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Email for inviting an external user.

#### `DesPermissionUpsertInput.trusteeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

Id of known trustee.
