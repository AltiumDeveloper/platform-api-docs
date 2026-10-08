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

#### `applicationAgg` · [`[SupSolutionTemplateRefDesignApplicationBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-application-bucket.md) list object

Aggregate on applications for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

#### `categoryAgg` · [`[SupSolutionTemplateRefDesignCategoryBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-category-bucket.md) list object

Aggregate on categories for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of reference designs found.

#### `publisherAgg` · [`[SupSolutionTemplateRefDesignPublisherBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-publisher-bucket.md) list object

Aggregate on publishers for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

#### `results` · [`[SupSolutionTemplateRefDesign!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-ref-design.md) non-null union

List of reference designs in the current result set.

#### `tagAgg` · [`[SupSolutionTemplateRefDesignTagBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-tag-bucket.md) list object

Aggregate on tags for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

#### `typeAgg` · [`[SupSolutionTemplateRefDesignTypeBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-type-bucket.md) list object

Aggregate on reference design types for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar
