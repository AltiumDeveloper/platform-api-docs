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

#### `SupSoftwareProjectSearchFilterInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by description.

#### `SupSoftwareProjectSearchFilterInput.ids` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Searches by software project identifiers.

#### `SupSoftwareProjectSearchFilterInput.isRecommended` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Searches by recommendation status.

#### `SupSoftwareProjectSearchFilterInput.q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by important fields (title, description).

#### `SupSoftwareProjectSearchFilterInput.title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by title.

#### `SupSoftwareProjectSearchFilterInput.types` · [`[SupSoftwareProjectType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) list enum supply

Searches by type.
