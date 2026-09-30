---
title: "SupSoftwareProjectSetPreviewImagesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-set-preview-images-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetPreviewImagesInput

Input for replacing all preview images on a software project.

### Member Of

[`supSoftwareProjectSetPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-set-preview-images.md) mutation

```graphql
input SupSoftwareProjectSetPreviewImagesInput {
  previewImages: [SupSoftwareProjectFileInput!]
  softwareProjectId: ID!
}
```

### Fields

#### `SupSoftwareProjectSetPreviewImagesInput.previewImages` · [`[SupSoftwareProjectFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-file-input.md) list input supply

The new set of preview images. Replaces all existing preview images.

#### `SupSoftwareProjectSetPreviewImagesInput.softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the software project.
