---
title: "SupSoftwareProjectEvalKitProjectSourceArtifact"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-project-source-artifact"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitProjectSourceArtifact

### Member Of

[`SupSoftwareProjectEvalKitProjectSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-project-source.md) object

```graphql
type SupSoftwareProjectEvalKitProjectSourceArtifact {
  downloadUrl: String!
  fileName: String!
  fileSizeInBytes: Long!
  outputSdmUrl: String!
  updatedAt: DateTime!
}
```

### Fields

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The download URL of the artifact.

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The file name of the artifact.

#### `fileSizeInBytes` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

The size of the artifact file in bytes.

#### `outputSdmUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the output SDM.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date of the artifact.
