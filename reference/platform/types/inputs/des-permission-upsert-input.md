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

#### `canEdit` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates read/write permissions.

#### `email` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Email for inviting an external user.

#### `trusteeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

Id of known trustee.
