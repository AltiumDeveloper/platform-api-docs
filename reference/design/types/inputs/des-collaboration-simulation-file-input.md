---
title: "DesCollaborationSimulationFileInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-collaboration-simulation-file-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCollaborationSimulationFileInput

Input for collaboration simulation file.

### Member Of

[`DesUploadCollaborationSimulationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-upload-collaboration-simulation-input.md) input

```graphql
input DesCollaborationSimulationFileInput {
  fileId: String!
  fileName: String!
  fileType: String!
}
```

### Fields

#### `DesCollaborationSimulationFileInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Collaboration simulation file identifier.

#### `DesCollaborationSimulationFileInput.fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Collaboration simulation file name.

#### `DesCollaborationSimulationFileInput.fileType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Collaboration simulation file type.
