---
title: "desWorkspaceById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceById

Search a specific workspace by its unique identifier.

### Type

#### [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object

A workspace provides a flexible and secure method for managing design, manufacturing and supply content.

```graphql
desWorkspaceById(
  id: ID!
): DesWorkspace
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for a workspace.
