---
title: "supSoftwareProjects"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-projects"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjects

List a reference solutions.

```graphql
supSoftwareProjects(
  filter: SupSoftwareProjectFilterInput
  limit: Int! = 10
  order: [SupSoftwareProjectOrderInput!]
  q: String
  start: Int! = 0
): [SupSoftwareProject]!
```

### Arguments

#### `supSoftwareProjects.filter` · [`SupSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-filter-input.md) input supply

Optional structured filter input for searching.

#### `supSoftwareProjects.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Page size of results.

#### `supSoftwareProjects.order` · [`[SupSoftwareProjectOrderInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-order-input.md) list input supply

Order the results by one or more fields. The first input is main order field.

#### `supSoftwareProjects.q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The search query string. Leave empty to query all.

#### `supSoftwareProjects.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Offset in the result set.

### Type

#### [`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) object supply
