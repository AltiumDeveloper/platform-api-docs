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

#### `SupEvalKitByRefDesignFilterInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by description.

#### `SupEvalKitByRefDesignFilterInput.partIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Searches by part identifiers.

#### `SupEvalKitByRefDesignFilterInput.q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by important fields (title, description).

#### `SupEvalKitByRefDesignFilterInput.title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by title.
