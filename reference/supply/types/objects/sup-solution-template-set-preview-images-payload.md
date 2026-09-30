---
title: "SupSolutionTemplateSetPreviewImagesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-set-preview-images-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetPreviewImagesPayload

Payload for replacing all preview images on a solution template.

### Returned By

[`supSolutionTemplateSetPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-preview-images.md) mutation

```graphql
type SupSolutionTemplateSetPreviewImagesPayload {
  errors: [SupSolutionTemplateSetPreviewImagesError!]
  success: Boolean
}
```

### Fields

#### `SupSolutionTemplateSetPreviewImagesPayload.errors` · [`[SupSolutionTemplateSetPreviewImagesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-preview-images-error.md) list union supply

#### `SupSolutionTemplateSetPreviewImagesPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
