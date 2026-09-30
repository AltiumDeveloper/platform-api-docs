---
title: "SupSolutionTemplateRefDesignCategoryBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-category-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignCategoryBucket

Aggregation bucket for reference design categories with category identifier + counts.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
type SupSolutionTemplateRefDesignCategoryBucket {
  categoryId: String!
  count: Int!
}
```

### Fields

#### `SupSolutionTemplateRefDesignCategoryBucket.categoryId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of category.

#### `SupSolutionTemplateRefDesignCategoryBucket.count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of items in the bucket.
