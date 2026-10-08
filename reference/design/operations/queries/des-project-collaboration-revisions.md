---
title: "desProjectCollaborationRevisions"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-revisions"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectCollaborationRevisions

The project ECAD, MCAD or ESD revisions returned by pages.

### Type

#### [`DesCollaborationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-connection.md) object

A connection to a list of items.

```graphql
desProjectCollaborationRevisions(
  after: String
  before: String
  domain: DesCollaborationDomain!
  first: Int
  last: Int
  projectId: ID!
): DesCollaborationRevisionConnection
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum

The collaboration domain.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier for a specific project.
