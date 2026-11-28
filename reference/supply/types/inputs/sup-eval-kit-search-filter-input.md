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
  hasRefDesigns: Boolean
  ids: [ID!]
  partIds: [String!]
  q: String
  refDesignIds: [ID!]
  status: SupEvalKitStatus
  title: String
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `hasRefDesigns` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter for evaluation kit that have any valid reference design associated if specified.

#### `ids` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by evaluation kit identifiers.

#### `partIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by part identifiers.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (title, description).

#### `refDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by reference design identifiers.

#### `status` · [`SupEvalKitStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-eval-kit-status.md) enum

Filter by evaluation kit status if specified.

#### `title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by title.
