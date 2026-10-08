---
title: "SupSolutionTemplateSetPreviewImagesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-preview-images-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetPreviewImagesInput

Input for replacing all preview images on a solution template.

### Member Of

[`supSolutionTemplateSetPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-preview-images.md) mutation

```graphql
input SupSolutionTemplateSetPreviewImagesInput {
  previewImages: [SupSolutionTemplateFileInput!]
  solutionTemplateId: ID!
}
```

### Fields

#### `previewImages` · [`[SupSolutionTemplateFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) list input

The new set of preview images. Replaces all existing preview images.

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.
