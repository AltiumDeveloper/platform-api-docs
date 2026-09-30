---
title: "desWorkspaceTasks"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-workspace-tasks"
bounded_context: "Collaboration"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceTasks

The list of workspace tasks.

```graphql
desWorkspaceTasks(
  after: String
  before: String
  first: Int
  last: Int
  workspaceUrl: String
): DesTaskConnection
```

### Arguments

#### `desWorkspaceTasks.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `desWorkspaceTasks.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desWorkspaceTasks.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `desWorkspaceTasks.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desWorkspaceTasks.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL of the workspace to get tasks from.

### Type

#### [`DesTaskConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-connection.md) object collaboration

A connection to a list of items.
