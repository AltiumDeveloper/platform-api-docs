---
title: "SupSolutionTemplateRefDesignApplicationBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-application-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignApplicationBucket

Aggregation bucket for applications with application identifier + counts.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
type SupSolutionTemplateRefDesignApplicationBucket {
  applicationId: String!
  count: Int!
}
```

### Fields

#### `SupSolutionTemplateRefDesignApplicationBucket.applicationId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of application.

#### `SupSolutionTemplateRefDesignApplicationBucket.count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of items in the bucket.
