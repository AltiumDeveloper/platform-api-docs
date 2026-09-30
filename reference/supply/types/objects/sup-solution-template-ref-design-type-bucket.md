---
title: "SupSolutionTemplateRefDesignTypeBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-type-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignTypeBucket

Aggregation bucket for reference design types with type + counts.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
type SupSolutionTemplateRefDesignTypeBucket {
  count: Int!
  type: SupSolutionTemplateRefDesignType!
}
```

### Fields

#### `SupSolutionTemplateRefDesignTypeBucket.count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of items in the bucket.

#### `SupSolutionTemplateRefDesignTypeBucket.type` · [`SupSolutionTemplateRefDesignType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-ref-design-type.md) non-null enum supply

Reference design type or solution template.
