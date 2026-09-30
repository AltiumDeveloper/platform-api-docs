---
title: "DesCreateDatasheetInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-datasheet-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateDatasheetInput

Input for creating a datasheet.

### Member Of

[`desCreateDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-create-datasheet.md) mutation

```graphql
input DesCreateDatasheetInput {
  comment: String
  description: String
  file: DesCreateDatasheetFileInput!
  folderId: String!
  lifeCycleDefinitionId: ID
  name: String
  revisionNamingSchemeId: ID
  workspaceUrl: String
}
```

### Fields

#### `DesCreateDatasheetInput.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment for datasheet revision.

#### `DesCreateDatasheetInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Description for datasheet revision.

#### `DesCreateDatasheetInput.file` · [`DesCreateDatasheetFileInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-datasheet-file-input.md) non-null input library-management

The datasheet file (typically a PDF or document).

#### `DesCreateDatasheetInput.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The destination folder identifier.

#### `DesCreateDatasheetInput.lifeCycleDefinitionId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The datasheet life cycle definition identifier.

#### `DesCreateDatasheetInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The datasheet name. Use null to be generated, provided that the destination folder defines an item naming scheme.

#### `DesCreateDatasheetInput.revisionNamingSchemeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The datasheet revision naming scheme identifier.

#### `DesCreateDatasheetInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.
