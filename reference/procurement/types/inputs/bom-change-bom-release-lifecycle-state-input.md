---
title: "BomChangeBomReleaseLifecycleStateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-change-bom-release-lifecycle-state-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomChangeBomReleaseLifecycleStateInput

Input for changing the lifecycle state of a BOM release.

### Member Of

[`bomChangeBomReleaseLifecycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/mutations/bom-change-bom-release-lifecycle-state.md) mutation

```graphql
input BomChangeBomReleaseLifecycleStateInput {
  bomId: String!
  releaseId: String!
  transitionId: String!
}
```

### Fields

#### `bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the BOM to update.

#### `releaseId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the release to update.

#### `transitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the transition to apply.
