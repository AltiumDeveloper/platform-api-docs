---
title: "SupSolutionTemplateRefDesignPublisherBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-publisher-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignPublisherBucket

Aggregation bucket for reference design publishers with company identifier + counts.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
type SupSolutionTemplateRefDesignPublisherBucket {
  count: Int!
  publisherId: String!
}
```

### Fields

#### `count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the company that publish the reference design.
