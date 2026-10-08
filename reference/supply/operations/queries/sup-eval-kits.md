---
title: "supEvalKits"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kits"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKits

List a evaluation kits.

### Type

#### [`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) object

```graphql
supEvalKits(
  filter: SupEvalKitFilterInput
  limit: Int! = 10
  order: [SupEvalKitOrderInput!]
  q: String
  start: Int! = 0
): [SupEvalKit]!
```

### Arguments

#### `filter` · [`SupEvalKitFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-filter-input.md) input

Optional structured filter input for searching.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.

#### `order` · [`[SupEvalKitOrderInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-order-input.md) list input

Order the results by one or more fields. The first input is main order field.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The search query string. Leave empty to query all.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.
