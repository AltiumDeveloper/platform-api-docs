---
title: "SupRefDesignResultSet"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-result-set"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesignResultSet

Reference designs with pagination, aggregation information.

### Returned By

[`supRefDesigns`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-designs.md) query

```graphql
type SupRefDesignResultSet {
  applicationAgg(
    size: Int = 10
  ): [SupRefApplicationBucket!]
  categoryAgg(
    size: Int = 10
  ): [SupRefCategoryBucket!]
  hits: Int!
  publisherAgg(
    size: Int = 10
  ): [SupRefPublisherBucket!]
  results: [SupRefDesign!]!
  tagAgg(
    size: Int = 10
  ): [SupRefTagBucket!]
  typeAgg(
    size: Int = 10
  ): [SupRefDesignTypeBucket!]
}
```

### Fields

#### `applicationAgg` · [`[SupRefApplicationBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-application-bucket.md) list object

Aggregate on applications for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

#### `categoryAgg` · [`[SupRefCategoryBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-category-bucket.md) list object

Aggregate on categories for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of reference designs found.

#### `publisherAgg` · [`[SupRefPublisherBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-publisher-bucket.md) list object

Aggregate on publishers for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

#### `results` · [`[SupRefDesign!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) non-null object

List of reference designs in the current result set.

#### `tagAgg` · [`[SupRefTagBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-tag-bucket.md) list object

Aggregate on tags for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

#### `typeAgg` · [`[SupRefDesignTypeBucket!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-type-bucket.md) list object

Aggregate on reference design types for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar
