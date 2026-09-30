---
title: "DesUploadCollaborationSimulationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-upload-collaboration-simulation-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUploadCollaborationSimulationInput

Input for uploading a collaboration simulation.

### Member Of

[`desUploadCollaborationSimulation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-upload-collaboration-simulation.md) mutation

```graphql
input DesUploadCollaborationSimulationInput {
  comment: String!
  domain: String!
  files: [DesCollaborationSimulationFileInput!]!
  projectId: ID!
  projectType: String!
  revision: String!
}
```

### Fields

#### `DesUploadCollaborationSimulationInput.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Comment.

#### `DesUploadCollaborationSimulationInput.domain` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Domain.

#### `DesUploadCollaborationSimulationInput.files` · [`[DesCollaborationSimulationFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-collaboration-simulation-file-input.md) non-null input design

Collaboration simulation files.

#### `DesUploadCollaborationSimulationInput.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Project identifier.

#### `DesUploadCollaborationSimulationInput.projectType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Project type.

#### `DesUploadCollaborationSimulationInput.revision` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Revision.
