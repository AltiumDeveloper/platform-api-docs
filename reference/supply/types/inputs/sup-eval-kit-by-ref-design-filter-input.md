---
title: "SupEvalKitByRefDesignFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-by-ref-design-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitByRefDesignFilterInput

Represents the filter for searching evaluation kits.

### Member Of

[`supEvalKitDetailsByRefDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-details-by-ref-design-id.md) query

```graphql
input SupEvalKitByRefDesignFilterInput {
  description: String
  partIds: [String!]
  q: String
  title: String
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `partIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by part identifiers.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (title, description).

#### `title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by title.
