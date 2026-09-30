---
title: "SupRefDesignTypeBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-type-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesignTypeBucket

Aggregation bucket for reference design types with type + counts.

### Member Of

[`SupRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-result-set.md) object

```graphql
type SupRefDesignTypeBucket {
  count: Int!
  type: SupRefDesignType!
}
```

### Fields

#### `SupRefDesignTypeBucket.count` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of items in the bucket.

#### `SupRefDesignTypeBucket.type` · [`SupRefDesignType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-type.md) non-null enum supply

Reference design type.
