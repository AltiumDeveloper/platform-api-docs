---
title: "desAnnotations"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-annotations"
bounded_context: "Collaboration"
kind: "queries"
experimental: false
deprecated: false
---

# desAnnotations

Search annotations within a project with results in paged groups.

```graphql
desAnnotations(
  after: String
  before: String
  first: Int
  last: Int
  projectId: String!
  where: RequirementFilterInput
): DesAnnotationsConnection
```

### Arguments

#### `desAnnotations.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `desAnnotations.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desAnnotations.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `desAnnotations.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desAnnotations.projectId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `desAnnotations.where` · [`RequirementFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/types/inputs/requirement-filter-input.md) input requirements

### Type

#### [`DesAnnotationsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotations-connection.md) object collaboration

A connection to a list of items.
