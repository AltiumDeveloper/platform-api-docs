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

#### `entityId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The entity's identificator.

#### `permissionsToRemove` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

List of permissions to remove.

#### `permissionsToUpsert` · [`[DesPermissionUpsertInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-permission-upsert-input.md) non-null input

List of permissions to upsert.

#### `replaceExisiting` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether to replace existing permissions.
