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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The project description.

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The uploaded zip file identifier.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The project name.

#### `parentFolderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project target parent folder identifier.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
