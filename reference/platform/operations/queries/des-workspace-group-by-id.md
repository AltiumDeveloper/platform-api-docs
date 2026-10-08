---
title: "desWorkspaceGroupById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-group-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceGroupById

Retrieves a workspace group by ID.

### Type

#### [`DesWorkspaceGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) object

The information about the workspace group.

```graphql
desWorkspaceGroupById(
  id: ID!
): DesWorkspaceGroup
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
