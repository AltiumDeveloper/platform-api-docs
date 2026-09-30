---
title: "desProjectCollaborationSimulationRevisions"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-simulation-revisions"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectCollaborationSimulationRevisions

\*PROTOTYPE, SUBJECT TO CHANGE\*

```graphql
desProjectCollaborationSimulationRevisions(
  after: String
  before: String
  domainName: String!
  first: Int
  last: Int
  projectId: ID!
): DesCollaborationSimulationRevisionConnection
```

### Arguments

#### `desProjectCollaborationSimulationRevisions.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `desProjectCollaborationSimulationRevisions.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desProjectCollaborationSimulationRevisions.domainName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The collaboration domain name.

#### `desProjectCollaborationSimulationRevisions.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `desProjectCollaborationSimulationRevisions.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desProjectCollaborationSimulationRevisions.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project identifier.

### Type

#### [`DesCollaborationSimulationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision-connection.md) object design

A connection to a list of items.
