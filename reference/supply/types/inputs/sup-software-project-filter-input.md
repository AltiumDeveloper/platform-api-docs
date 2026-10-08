---
title: "SupSoftwareProjectFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectFilterInput

Input for filtering software projects by additional conditions.

### Member Of

[`supSoftwareProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-projects.md) query

```graphql
input SupSoftwareProjectFilterInput {
  isRecommended: Boolean
  publisherIds: [String!]
  types: [SupSoftwareProjectType!]
}
```

### Fields

#### `isRecommended` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter by recommendation status if specified.

#### `publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of publisher identifiers if specified.

#### `types` · [`[SupSoftwareProjectType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) list enum

Filter by a list of software project types if specified.
