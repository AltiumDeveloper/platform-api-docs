---
title: "SupRefTagBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-tag-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefTagBucket

Aggregation bucket for reference design tags with name + counts.

### Member Of

[`SupRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-result-set.md) object

```graphql
type SupRefTagBucket {
  count: Int!
  name: String!
}
```

### Fields

#### `count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Tag name associated with reference design.
