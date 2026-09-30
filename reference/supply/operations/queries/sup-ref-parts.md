---
title: "supRefParts"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-parts"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supRefParts

Search a specific parts by reference design unique identifier and part's designators.

```graphql
supRefParts(
  designators: [String!]
  limit: Int! = 50
  refDesignId: ID!
  start: Int! = 0
): [SupRefPart!]
```

### Arguments

#### `supRefParts.designators` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `supRefParts.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `supRefParts.refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `supRefParts.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

### Type

#### [`SupRefPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-part.md) object supply
