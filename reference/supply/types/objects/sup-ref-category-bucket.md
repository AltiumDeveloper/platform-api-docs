---
title: "SupRefCategoryBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-category-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefCategoryBucket

Aggregation bucket for reference design categories with category identifier + counts.

### Member Of

[`SupRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-result-set.md) object

```graphql
type SupRefCategoryBucket {
  categoryId: String!
  count: Int!
}
```

### Fields

#### `categoryId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of category.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.
