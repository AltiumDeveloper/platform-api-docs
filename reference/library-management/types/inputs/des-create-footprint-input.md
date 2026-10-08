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

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment for footprint revision.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Description for footprint revision.

#### `files` · [`[DesCreateFootprintFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-footprint-file-input.md) non-null input

The footprint files.

#### `folderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The destination folder identifier.

#### `lifeCycleDefinitionId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The footprint life cycle definition identifier.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The footprint name. Use null to be generated, provided that the destination folder defines an item naming scheme.

#### `parameters` · [`[DesRevisionParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-revision-parameter-input.md) list input

Parameters for footprint revision.

#### `revisionNamingSchemeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The footprint revision naming scheme identifier.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
