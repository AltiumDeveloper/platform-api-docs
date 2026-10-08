---
title: "SupSolutionTemplatePatchPreviewImagesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-preview-images-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchPreviewImagesPayload

Payload for patching preview images on a solution template.

### Returned By

[`supSolutionTemplatePatchPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-preview-images.md) mutation

```graphql
type SupSolutionTemplatePatchPreviewImagesPayload {
  errors: [SupSolutionTemplatePatchPreviewImagesError!]
  success: Boolean
}
```

### Fields

#### `errors` · [`[SupSolutionTemplatePatchPreviewImagesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-preview-images-error.md) list union

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.
