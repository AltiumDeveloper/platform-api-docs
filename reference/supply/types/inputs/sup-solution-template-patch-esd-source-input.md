---
title: "SupSolutionTemplatePatchEsdSourceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-esd-source-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchEsdSourceInput

### Member Of

[`SupSolutionTemplateUpdateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-input.md) input

```graphql
input SupSolutionTemplatePatchEsdSourceInput {
  clearCompileModel: Boolean
  clearPreviewImage: Boolean
  compileModel: SupSolutionTemplateFileInput
  documentFile: SupSolutionTemplateFileInput
  previewImageFile: SupSolutionTemplateFileInput
}
```

### Fields

#### `clearCompileModel` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Clear the existing ESD compile model file when true.

#### `clearPreviewImage` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Clear the existing ESD preview image file when true.

#### `compileModel` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) input

The ESD compile model file to update if specified.

#### `documentFile` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) input

The ESD document file to update if specified.

#### `previewImageFile` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) input

The ESD preview image file to update if specified.
