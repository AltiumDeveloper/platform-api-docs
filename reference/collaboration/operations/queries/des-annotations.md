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

### Type

#### [`DesAnnotationsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotations-connection.md) object

A connection to a list of items.

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

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `projectId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `where` · [`RequirementFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/types/inputs/requirement-filter-input.md) input Requirements
