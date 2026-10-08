---
title: "desWorkspaceUserById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-user-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceUserById

Retrieves a workspace user by ID.

### Type

#### [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object

Represents a user registered in a workspace.

```graphql
desWorkspaceUserById(
  id: ID!
): DesWorkspaceUser
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The ID of the workspace user.
