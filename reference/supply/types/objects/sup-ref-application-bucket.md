---
title: "SupRefApplicationBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-application-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefApplicationBucket

Aggregation bucket for reference design applications with application identifier + counts.

### Member Of

[`SupRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-result-set.md) object

```graphql
type SupRefApplicationBucket {
  applicationId: String!
  count: Int!
}
```

### Fields

#### `applicationId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of application.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.
