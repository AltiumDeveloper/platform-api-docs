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

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Comment.

#### `domain` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Domain.

#### `files` · [`[DesCollaborationSimulationFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-collaboration-simulation-file-input.md) non-null input

Collaboration simulation files.

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Project identifier.

#### `projectType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Project type.

#### `revision` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Revision.
