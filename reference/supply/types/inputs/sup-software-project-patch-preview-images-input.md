---
title: "SupSoftwareProjectPatchPreviewImagesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-patch-preview-images-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchPreviewImagesInput

Input for patching preview images on a software project.

### Member Of

[`supSoftwareProjectPatchPreviewImages`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-patch-preview-images.md) mutation

```graphql
input SupSoftwareProjectPatchPreviewImagesInput {
  addPreviewImages: [SupSoftwareProjectFileInput!]
  deletePreviewImageUrls: [String!]
  reorderPreviewImageUrls: [String!]
  softwareProjectId: ID!
}
```

### Fields

#### `SupSoftwareProjectPatchPreviewImagesInput.addPreviewImages` · [`[SupSoftwareProjectFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-file-input.md) list input supply

Preview images to add.

#### `SupSoftwareProjectPatchPreviewImagesInput.deletePreviewImageUrls` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Preview image URLs to delete.

#### `SupSoftwareProjectPatchPreviewImagesInput.reorderPreviewImageUrls` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Preview image URLs in the desired sort order. Must cover all remaining images after deletes.

#### `SupSoftwareProjectPatchPreviewImagesInput.softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the software project.
