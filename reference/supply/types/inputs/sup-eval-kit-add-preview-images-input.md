---
title: "SupEvalKitAddPreviewImagesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-add-preview-images-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitAddPreviewImagesInput

Input for adding preview images to an evaluation kit.

### Member Of

[`supEvalKitAddPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-add-preview-images.md) mutation

```graphql
input SupEvalKitAddPreviewImagesInput {
  evalKitId: ID!
  previewImages: [SupEvalKitFileInput!]!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the evaluation kit.

#### `previewImages` · [`[SupEvalKitFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) non-null input

The collection of preview images to add.
