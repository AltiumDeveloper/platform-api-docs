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

#### `partId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The part identifier.

#### `previewImages` · [`[SupImage!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) non-null object

Preview images that provide a visual overview of the evaluation kit.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The evaluation kit title.
