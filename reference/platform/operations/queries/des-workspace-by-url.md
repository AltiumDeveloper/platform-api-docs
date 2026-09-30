---
title: "desWorkspaceByUrl"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-by-url"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceByUrl

Search a specific workspace by its URL.

```graphql
desWorkspaceByUrl(
  workspaceUrl: String!
): DesWorkspace
```

### Arguments

#### `desWorkspaceByUrl.workspaceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The workspace URL.

### Type

#### [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object platform

A workspace provides a flexible and secure method for managing design, manufacturing and supply content.
