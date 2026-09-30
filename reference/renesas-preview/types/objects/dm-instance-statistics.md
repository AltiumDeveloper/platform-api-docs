---
title: "DmInstanceStatistics"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-instance-statistics"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmInstanceStatistics

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Statistics on instance counts across supported models for an interface.

### Member Of

[`DmInterfaceModelSupport`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-model-support.md) object

```graphql
type DmInstanceStatistics {
  avg: Float!
  histogram: [DmHistogramBucket!]!
  max: Int!
  median: Float!
  min: Int!
}
```

### Fields

#### `DmInstanceStatistics.avg` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Average number of instances across supported models.

#### `DmInstanceStatistics.histogram` · [`[DmHistogramBucket!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-histogram-bucket.md) non-null object renesas-preview

Histogram showing number of models per instance count bucket, sorted by instance count.

#### `DmInstanceStatistics.max` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Maximum number of instances across supported models.

#### `DmInstanceStatistics.median` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Median number of instances across supported models.

#### `DmInstanceStatistics.min` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Minimum number of instances across supported models.
