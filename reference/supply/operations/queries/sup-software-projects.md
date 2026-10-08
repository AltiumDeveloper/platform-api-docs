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

### Type

#### [`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) object

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

#### `filter` · [`SupSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-filter-input.md) input

Optional structured filter input for searching.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.

#### `order` · [`[SupSoftwareProjectOrderInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-order-input.md) list input

Order the results by one or more fields. The first input is main order field.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The search query string. Leave empty to query all.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.
