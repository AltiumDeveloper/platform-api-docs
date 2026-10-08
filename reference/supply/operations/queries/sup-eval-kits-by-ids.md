---
title: "supEvalKitsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kits-by-ids"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitsByIds

Search a specific evaluation kit by its unique identifier.

### Type

#### [`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) object

```graphql
supEvalKitsByIds(
  ids: [ID!]!
): [SupEvalKit]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
