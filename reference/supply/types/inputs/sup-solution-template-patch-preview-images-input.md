---
title: "SupSolutionTemplatePatchPreviewImagesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-preview-images-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchPreviewImagesInput

Input for patching preview images on a solution template.

### Member Of

[`supSolutionTemplatePatchPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-preview-images.md) mutation

```graphql
input SupSolutionTemplatePatchPreviewImagesInput {
  addPreviewImages: [SupSolutionTemplateFileInput!]
  deletePreviewImageUrls: [String!]
  reorderPreviewImageUrls: [String!]
  solutionTemplateId: ID!
}
```

### Fields

#### `addPreviewImages` · [`[SupSolutionTemplateFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) list input

Preview images to add.

#### `deletePreviewImageUrls` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Preview image URLs to delete.

#### `reorderPreviewImageUrls` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Preview image URLs in the desired sort order. Must cover all remaining images after deletes.

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.
