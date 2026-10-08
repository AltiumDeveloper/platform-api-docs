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

#### `file` · [`DesReleaseComponentFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-file-input.md) input

The datasheet file for adding a new datasheet to the release. Either `id` or `file` must be provided.

#### `id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

Datasheet identifier for adding an existing datasheet to the release. Either `id` or `file` must be provided.

#### `itemName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The datasheet name for the `file`. Use null to be generated.

#### `lifeCycleDefinitionNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The datasheet life cycle definition identifier. Required when `file` is provided.

#### `revisionNamingSchemeNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The datasheet revision naming scheme identifier. Required when `file` is provided.
