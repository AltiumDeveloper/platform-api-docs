---
title: "DesUploadCollaborationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-upload-collaboration-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUploadCollaborationInput

Input for uploading a collaboration.

### Member Of

[`desUploadCollaboration`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-upload-collaboration.md) mutation

```graphql
input DesUploadCollaborationInput {
  comment: String!
  design: DesCadDesignInput
  domain: DesCollaborationDomain!
  fileId: String
  projectId: ID!
}
```

### Fields

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The uploaded file comment.

#### `design` · [`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

\*PROTOTYPE, SUBJECT TO CHANGE\*

#### `domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum

The ECAD, MCAD or ESD domain.

#### `fileId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The uploaded file identifier. Either the file identifier or design must be given.

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Project identifier.
