---
title: "SupSoftwareProjectPatchPreviewImagesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-patch-preview-images-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchPreviewImagesPayload

Payload for patching preview images on a software project.

### Returned By

[`supSoftwareProjectPatchPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-patch-preview-images.md) mutation

```graphql
type SupSoftwareProjectPatchPreviewImagesPayload {
  errors: [SupSoftwareProjectPatchPreviewImagesError!]
  success: Boolean
}
```

### Fields

#### `errors` · [`[SupSoftwareProjectPatchPreviewImagesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-software-project-patch-preview-images-error.md) list union

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.
