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

#### `desProjectCollaborationRevisions.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `desProjectCollaborationRevisions.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desProjectCollaborationRevisions.domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum design

The collaboration domain.

#### `desProjectCollaborationRevisions.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `desProjectCollaborationRevisions.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desProjectCollaborationRevisions.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier for a specific project.

### Type

#### [`DesCollaborationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-connection.md) object design

A connection to a list of items.
