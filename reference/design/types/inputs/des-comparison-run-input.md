---
title: "DesComparisonRunInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-comparison-run-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesComparisonRunInput

### Member Of

[`desCompareReleases`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-compare-releases.md) mutation

```graphql
input DesComparisonRunInput {
  mode: DesComparisonMode!
  sourceReleaseId: ID!
  targetReleaseId: ID!
}
```

### Fields

#### `mode` · [`DesComparisonMode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-comparison-mode.md) non-null enum

#### `sourceReleaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `targetReleaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
