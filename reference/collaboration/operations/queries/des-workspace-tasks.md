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

### Type

#### [`DesTaskConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-connection.md) object

A connection to a list of items.

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

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the workspace to get tasks from.
