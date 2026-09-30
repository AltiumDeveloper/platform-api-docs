---
title: "DesCreateFootprintInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-footprint-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateFootprintInput

Input for creating a footprint.

### Member Of

[`desCreateFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-create-footprint.md) mutation

```graphql
input DesCreateFootprintInput {
  comment: String
  description: String
  files: [DesCreateFootprintFileInput!]!
  folderId: ID!
  lifeCycleDefinitionId: ID
  name: String
  parameters: [DesRevisionParameterInput!]
  revisionNamingSchemeId: ID
  workspaceUrl: String
}
```

### Fields

#### `DesCreateFootprintInput.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment for footprint revision.

#### `DesCreateFootprintInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Description for footprint revision.

#### `DesCreateFootprintInput.files` · [`[DesCreateFootprintFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-footprint-file-input.md) non-null input library-management

The footprint files.

#### `DesCreateFootprintInput.folderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The destination folder identifier.

#### `DesCreateFootprintInput.lifeCycleDefinitionId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The footprint life cycle definition identifier.

#### `DesCreateFootprintInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The footprint name. Use null to be generated, provided that the destination folder defines an item naming scheme.

#### `DesCreateFootprintInput.parameters` · [`[DesRevisionParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-revision-parameter-input.md) list input library-management

Parameters for footprint revision.

#### `DesCreateFootprintInput.revisionNamingSchemeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The footprint revision naming scheme identifier.

#### `DesCreateFootprintInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.
