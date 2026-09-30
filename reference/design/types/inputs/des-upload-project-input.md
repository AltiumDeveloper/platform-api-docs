---
title: "DesUploadProjectInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-upload-project-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUploadProjectInput

Input for uploading a project.

### Member Of

[`desUploadProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-upload-project.md) mutation

```graphql
input DesUploadProjectInput {
  description: String
  fileId: String!
  name: String!
  parentFolderId: ID!
  workspaceUrl: String
}
```

### Fields

#### `DesUploadProjectInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The project description.

#### `DesUploadProjectInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The uploaded zip file identifier.

#### `DesUploadProjectInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The project name.

#### `DesUploadProjectInput.parentFolderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project target parent folder identifier.

#### `DesUploadProjectInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.
