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

#### `desProjects.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `desProjects.args` · [`DesProjectsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-projects-input.md) input design

Extra arguments.

#### `desProjects.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desProjects.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `desProjects.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desProjects.order` · [`[DesProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-sort-input.md) list input design

#### `desProjects.requirementsBlockFilter` · [`DesProjectsRequirementsBlockFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-projects-requirements-block-filter-input.md) input design

Requirements block filter.

#### `desProjects.where` · [`DesProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) input design

#### `desProjects.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The web address of a workspace.

### Type

#### [`DesProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-connection.md) object design

A connection to a list of items.
