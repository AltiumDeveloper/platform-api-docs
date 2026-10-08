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

### Type

#### [`DesCollaborationSimulationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision-connection.md) object

A connection to a list of items.

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

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `domainName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The collaboration domain name.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project identifier.
