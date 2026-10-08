---
title: "SupEvalKitSortPreviewImagesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-sort-preview-images-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSortPreviewImagesInput

Input for reordering preview images of an evaluation kit.

### Member Of

[`supEvalKitSortPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-sort-preview-images.md) mutation

```graphql
input SupEvalKitSortPreviewImagesInput {
  evalKitId: ID!
  sortedImageUrls: [String!]!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the evaluation kit.

#### `sortedImageUrls` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The collection of image URLs in the desired sort order.
