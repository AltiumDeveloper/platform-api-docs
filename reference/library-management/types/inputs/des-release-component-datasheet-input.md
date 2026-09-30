---
title: "DesReleaseComponentDatasheetInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-datasheet-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesReleaseComponentDatasheetInput

Input for releasing component datasheet.

### Member Of

[`DesReleaseComponentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-input.md) input

```graphql
input DesReleaseComponentDatasheetInput {
  file: DesReleaseComponentFileInput
  id: ID
  itemName: String
  lifeCycleDefinitionNodeId: ID
  revisionNamingSchemeNodeId: ID
}
```

### Fields

#### `DesReleaseComponentDatasheetInput.file` · [`DesReleaseComponentFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-file-input.md) input library-management

The datasheet file for adding a new datasheet to the release. Either `id` or `file` must be provided.

#### `DesReleaseComponentDatasheetInput.id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

Datasheet identifier for adding an existing datasheet to the release. Either `id` or `file` must be provided.

#### `DesReleaseComponentDatasheetInput.itemName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The datasheet name for the `file`. Use null to be generated.

#### `DesReleaseComponentDatasheetInput.lifeCycleDefinitionNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The datasheet life cycle definition identifier. Required when `file` is provided.

#### `DesReleaseComponentDatasheetInput.revisionNamingSchemeNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The datasheet revision naming scheme identifier. Required when `file` is provided.
