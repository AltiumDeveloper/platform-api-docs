---
title: "SupEvalKitCompatibleSoftwareProjectFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-compatible-software-project-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitCompatibleSoftwareProjectFilterInput

Represents the filter for searching compatible software projects.

### Member Of

[`supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-eval-kit-compatible-software-project-search.md) query

```graphql
input SupEvalKitCompatibleSoftwareProjectFilterInput {
  description: String
  q: String
  title: String
  types: [SupSoftwareProjectType!]
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (title, description).

#### `title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by title.

#### `types` · [`[SupSoftwareProjectType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) list enum

Searches by type.
