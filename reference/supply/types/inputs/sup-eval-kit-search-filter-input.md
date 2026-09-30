---
title: "SupEvalKitSearchFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-search-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSearchFilterInput

Represents the filter for searching evaluation kits.

### Member Of

[`supEvalKitSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-search.md) query

```graphql
input SupEvalKitSearchFilterInput {
  description: String
  ids: [ID!]
  partIds: [String!]
  q: String
  refDesignIds: [ID!]
  title: String
}
```

### Fields

#### `SupEvalKitSearchFilterInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by description.

#### `SupEvalKitSearchFilterInput.ids` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Searches by evaluation kit identifiers.

#### `SupEvalKitSearchFilterInput.partIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Searches by part identifiers.

#### `SupEvalKitSearchFilterInput.q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by important fields (title, description).

#### `SupEvalKitSearchFilterInput.refDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Searches by reference design identifiers.

#### `SupEvalKitSearchFilterInput.title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by title.
