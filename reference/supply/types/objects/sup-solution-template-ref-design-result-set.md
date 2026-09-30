---
title: "SupSolutionTemplateRefDesignResultSet"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-result-set"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignResultSet

Reference designs with pagination, aggregation information.

### Returned By

[`supSolutionTemplateRefDesignSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-ref-design-search.md) query

```graphql
type SupSolutionTemplateRefDesignResultSet {
  applicationAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignApplicationBucket!]
  categoryAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignCategoryBucket!]
  hits: Int!
  publisherAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignPublisherBucket!]
  results: [SupSolutionTemplateRefDesign!]!
  tagAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignTagBucket!]
  typeAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignTypeBucket!]
}
```

### Fields

#### `SupSolutionTemplateRefDesignResultSet.applicationAgg` · [`[SupSolutionTemplateRefDesignApplicationBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-application-bucket.md) list object supply

Aggregate on applications for this result set.

##### `SupSolutionTemplateRefDesignResultSet.applicationAgg.size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

#### `SupSolutionTemplateRefDesignResultSet.categoryAgg` · [`[SupSolutionTemplateRefDesignCategoryBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-category-bucket.md) list object supply

Aggregate on categories for this result set.

##### `SupSolutionTemplateRefDesignResultSet.categoryAgg.size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

#### `SupSolutionTemplateRefDesignResultSet.hits` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Total number of reference designs found.

#### `SupSolutionTemplateRefDesignResultSet.publisherAgg` · [`[SupSolutionTemplateRefDesignPublisherBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-publisher-bucket.md) list object supply

Aggregate on publishers for this result set.

##### `SupSolutionTemplateRefDesignResultSet.publisherAgg.size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

#### `SupSolutionTemplateRefDesignResultSet.results` · [`[SupSolutionTemplateRefDesign!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-ref-design.md) non-null union supply

List of reference designs in the current result set.

#### `SupSolutionTemplateRefDesignResultSet.tagAgg` · [`[SupSolutionTemplateRefDesignTagBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-tag-bucket.md) list object supply

Aggregate on tags for this result set.

##### `SupSolutionTemplateRefDesignResultSet.tagAgg.size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

#### `SupSolutionTemplateRefDesignResultSet.typeAgg` · [`[SupSolutionTemplateRefDesignTypeBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-type-bucket.md) list object supply

Aggregate on reference design types for this result set.

##### `SupSolutionTemplateRefDesignResultSet.typeAgg.size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common
