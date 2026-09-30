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

#### `supEvalKits.filter` · [`SupEvalKitFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-filter-input.md) input supply

Optional structured filter input for searching.

#### `supEvalKits.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Page size of results.

#### `supEvalKits.order` · [`[SupEvalKitOrderInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-order-input.md) list input supply

Order the results by one or more fields. The first input is main order field.

#### `supEvalKits.q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The search query string. Leave empty to query all.

#### `supEvalKits.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Offset in the result set.

### Type

#### [`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) object supply
