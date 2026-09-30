---
title: "SupSoftwareProjectSetPreviewImagesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-set-preview-images-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetPreviewImagesPayload

Payload for replacing all preview images on a software project.

### Returned By

[`supSoftwareProjectSetPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-set-preview-images.md) mutation

```graphql
type SupSoftwareProjectSetPreviewImagesPayload {
  errors: [SupSoftwareProjectSetPreviewImagesError!]
  success: Boolean
}
```

### Fields

#### `SupSoftwareProjectSetPreviewImagesPayload.errors` · [`[SupSoftwareProjectSetPreviewImagesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-software-project-set-preview-images-error.md) list union supply

#### `SupSoftwareProjectSetPreviewImagesPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
