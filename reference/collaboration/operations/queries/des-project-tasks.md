---
title: "desProjectTasks"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-project-tasks"
bounded_context: "Collaboration"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectTasks

The list of project tasks.

```graphql
desProjectTasks(
  after: String
  before: String
  first: Int
  last: Int
  projectId: ID!
): DesTaskConnection
```

### Arguments

#### `desProjectTasks.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `desProjectTasks.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desProjectTasks.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `desProjectTasks.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desProjectTasks.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier for a specific project.

### Type

#### [`DesTaskConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-connection.md) object collaboration

A connection to a list of items.
