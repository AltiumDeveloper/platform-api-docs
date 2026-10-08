---
title: "DmHistogramBucket"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-histogram-bucket"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmHistogramBucket

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A histogram bucket mapping an instance count to the number of models with that count.

### Member Of

[`DmInstanceStatistics`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-instance-statistics.md) object

```graphql
type DmHistogramBucket {
  deviceCount: Int!
  instanceCount: Int!
}
```

### Fields

#### `deviceCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of models that have this instance count.

#### `instanceCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of instances (the bucket value).
