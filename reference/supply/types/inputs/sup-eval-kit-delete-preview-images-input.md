---
title: "SupEvalKitDeletePreviewImagesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-delete-preview-images-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitDeletePreviewImagesInput

Input for deleting preview images from an evaluation kit.

### Member Of

[`supEvalKitDeletePreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-delete-preview-images.md) mutation

```graphql
input SupEvalKitDeletePreviewImagesInput {
  evalKitId: ID!
  imageUrls: [String!]!
}
```

### Fields

#### `SupEvalKitDeletePreviewImagesInput.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the evaluation kit.

#### `SupEvalKitDeletePreviewImagesInput.imageUrls` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The collection of image URLs to delete.
