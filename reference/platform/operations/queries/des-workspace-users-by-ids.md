---
title: "desWorkspaceUsersByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-users-by-ids"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceUsersByIds

Retrieves workspace users by their IDs.

```graphql
desWorkspaceUsersByIds(
  ids: [ID!]!
): [DesWorkspaceUser]!
```

### Arguments

#### `desWorkspaceUsersByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The IDs of the workspace users.

### Type

#### [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

Represents a user registered in a workspace.
