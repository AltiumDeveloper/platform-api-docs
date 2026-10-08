---
title: "SupSoftwareProjectCompatibleEvalKitFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectCompatibleEvalKitFilterInput

Represents the filter for searching compatible software projects.

### Member Of

[`supEvalKitSoftwareProjectCompatibleEvalKitSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-software-project-compatible-eval-kit-search.md) query

```graphql
input SupSoftwareProjectCompatibleEvalKitFilterInput {
  evalKitIds: [ID!]
  q: String
}
```

### Fields

#### `evalKitIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by evaluation kit identifiers.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (evaluation kit title, evaluation kit description).
