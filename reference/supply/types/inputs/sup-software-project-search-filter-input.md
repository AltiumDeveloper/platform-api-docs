---
title: "SupSoftwareProjectSearchFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-search-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSearchFilterInput

Represents the filter for searching software projects.

### Member Of

[`supSoftwareProjectSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-search.md) query

```graphql
input SupSoftwareProjectSearchFilterInput {
  description: String
  ids: [ID!]
  isRecommended: Boolean
  q: String
  title: String
  types: [SupSoftwareProjectType!]
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `ids` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by software project identifiers.

#### `isRecommended` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Searches by recommendation status.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (title, description).

#### `title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by title.

#### `types` · [`[SupSoftwareProjectType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) list enum

Searches by type.
