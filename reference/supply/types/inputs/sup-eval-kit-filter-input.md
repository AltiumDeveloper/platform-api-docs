---
title: "SupEvalKitFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitFilterInput

Input for filtering evaluation kits by additional conditions.

### Member Of

[`supEvalKits`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kits.md) query

```graphql
input SupEvalKitFilterInput {
  publisherIds: [String!]
}
```

### Fields

#### `publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of publisher (company) identifiers if specified.
