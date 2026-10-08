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

### Type

#### [`SupRefPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-part.md) object

```graphql
supRefParts(
  designators: [String!]
  limit: Int! = 50
  refDesignId: ID!
  start: Int! = 0
): [SupRefPart!]
```

### Arguments

#### `designators` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar
