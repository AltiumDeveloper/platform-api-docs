---
title: "SupSolutionTemplateFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateFileInput

### Member Of

[`SupSolutionTemplateCreateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-solution-template-input.md) input · [`SupSolutionTemplateEsdSourceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-esd-source-input.md) input · [`SupSolutionTemplateEsdSourcePatchInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-esd-source-patch-input.md) input · [`SupSolutionTemplatePatchEsdSourceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-esd-source-input.md) input · [`SupSolutionTemplatePatchPreviewImagesInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-preview-images-input.md) input · [`SupSolutionTemplateSetPreviewImagesInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-preview-images-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-input.md) input

```graphql
input SupSolutionTemplateFileInput {
  fileId: String!
  fileName: String!
  fileType: String!
}
```

### Fields

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The nexar file service identifier of the file.

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The file's name with extension included (e.g., example.json, image.jpg).

#### `fileType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the file.
