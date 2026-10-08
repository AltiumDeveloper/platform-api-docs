---
title: "SupSolutionTemplateEsdSourceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-esd-source-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateEsdSourceInput

### Member Of

[`SupSolutionTemplateCreateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-solution-template-input.md) input

```graphql
input SupSolutionTemplateEsdSourceInput {
  compileModel: SupSolutionTemplateFileInput
  documentFile: SupSolutionTemplateFileInput!
  previewImageFile: SupSolutionTemplateFileInput
}
```

### Fields

#### `compileModel` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) input

The ESD compile model file.

#### `documentFile` · [`SupSolutionTemplateFileInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) non-null input

The ESD document file.

#### `previewImageFile` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) input

The ESD preview resource file.
