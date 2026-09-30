---
title: "DesUpdatePermissionsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-permissions-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdatePermissionsInput

### Member Of

[`desUpdatePermissions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-permissions.md) mutation

```graphql
input DesUpdatePermissionsInput {
  entityId: ID!
  permissionsToRemove: [ID!]!
  permissionsToUpsert: [DesPermissionUpsertInput!]!
  replaceExisiting: Boolean!
}
```

### Fields

#### `DesUpdatePermissionsInput.entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The entity's identificator.

#### `DesUpdatePermissionsInput.permissionsToRemove` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

List of permissions to remove.

#### `DesUpdatePermissionsInput.permissionsToUpsert` · [`[DesPermissionUpsertInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-permission-upsert-input.md) non-null input platform

List of permissions to upsert.

#### `DesUpdatePermissionsInput.replaceExisiting` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether to replace existing permissions.
