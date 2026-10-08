---
title: "SupSolutionTemplateEsdSourcePatchInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-esd-source-patch-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateEsdSourcePatchInput

Input for patching the ESD source of a solution template.

### Member Of

[`supSolutionTemplatePatchEsdSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-esd-source.md) mutation

```graphql
input SupSolutionTemplateEsdSourcePatchInput {
  clearCompileModel: Boolean
  clearPreviewImage: Boolean
  compileModel: SupSolutionTemplateFileInput
  documentFile: SupSolutionTemplateFileInput
  previewImageFile: SupSolutionTemplateFileInput
  solutionTemplateId: ID!
}
```

### Fields

#### `clearCompileModel` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Clear the existing ESD compile model file when true.

#### `clearPreviewImage` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Clear the existing ESD preview image file when true.

#### `compileModel` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) input

The ESD compile model file to upload and replace, if specified.

#### `documentFile` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) input

The ESD document file to upload and replace, if specified. There is no way to clear the document file once set.

#### `previewImageFile` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) input

The ESD preview image file to upload and replace, if specified.

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.
