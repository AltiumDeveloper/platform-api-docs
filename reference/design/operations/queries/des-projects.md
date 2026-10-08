---
title: "desProjects"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desProjects

Search projects within a workspace with results in paged groups.

### Type

#### [`DesProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-connection.md) object

A connection to a list of items.

```graphql
desProjects(
  after: String
  args: DesProjectsInput
  before: String
  first: Int
  last: Int
  order: [DesProjectSortInput!]
  requirementsBlockFilter: DesProjectsRequirementsBlockFilterInput
  where: DesProjectFilterInput
  workspaceUrl: String
): DesProjectConnection
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `args` · [`DesProjectsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-projects-input.md) input

Extra arguments.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[DesProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-sort-input.md) list input

#### `requirementsBlockFilter` · [`DesProjectsRequirementsBlockFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-projects-requirements-block-filter-input.md) input

Requirements block filter.

#### `where` · [`DesProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) input

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The web address of a workspace.
