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

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment for datasheet revision.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Description for datasheet revision.

#### `file` · [`DesCreateDatasheetFileInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-datasheet-file-input.md) non-null input

The datasheet file (typically a PDF or document).

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The destination folder identifier.

#### `lifeCycleDefinitionId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The datasheet life cycle definition identifier.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The datasheet name. Use null to be generated, provided that the destination folder defines an item naming scheme.

#### `revisionNamingSchemeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The datasheet revision naming scheme identifier.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
