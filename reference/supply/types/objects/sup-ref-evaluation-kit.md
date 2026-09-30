---
title: "SupRefEvaluationKit"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-evaluation-kit"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefEvaluationKit

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object

```graphql
type SupRefEvaluationKit {
  partId: String!
  previewImages: [SupImage!]!
  title: String!
}
```

### Fields

#### `SupRefEvaluationKit.partId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The part identifier.

#### `SupRefEvaluationKit.previewImages` · [`[SupImage!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) non-null object supply

Preview images that provide a visual overview of the evaluation kit.

#### `SupRefEvaluationKit.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The evaluation kit title.
