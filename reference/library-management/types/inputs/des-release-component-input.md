---
title: "DesReleaseComponentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesReleaseComponentInput

Input for releasing component.

### Member Of

[`desReleaseComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-release-component.md) mutation

```graphql
input DesReleaseComponentInput {
  componentComment: String
  componentDescription: String
  componentItemName: String!
  componentLifeCycleDefinitionId: String
  componentLifeCycleDefinitionNodeId: ID
  componentParentFolderId: ID
  componentReleaseFolder: String
  componentRevisionNamingSchemeId: String
  componentRevisionNamingSchemeNodeId: ID
  componentTemplateId: ID
  componentTypeId: String
  datasheetReleaseFolder: String
  datasheetReleaseFolderItemNamingSchemeTemplate: String
  datasheets: [DesReleaseComponentDatasheetInput!]
  footprintFiles: [DesReleaseComponentFileInput!]
  footprintItemName: String
  footprintLifeCycleDefinitionId: String
  footprintLifeCycleDefinitionNodeId: ID
  footprintReleaseFolder: String
  footprintRevisionNamingSchemeId: String
  footprintRevisionNamingSchemeNodeId: ID
  footprints: [DesReleaseComponentFootprintInput!]
  parameters: [DesRevisionParameterInput!]!
  symbol: DesReleaseComponentSymbolInput
  symbolFiles: [DesReleaseComponentFileInput!]
  symbolItemName: String
  symbolLifeCycleDefinitionId: String
  symbolLifeCycleDefinitionNodeId: ID
  symbolReleaseFolder: String
  symbolRevisionNamingSchemeId: String
  symbolRevisionNamingSchemeNodeId: ID
  useExistingComponentReleaseFolder: Boolean
  workspaceUrl: String
}
```

### Fields

#### `componentComment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment for component.

#### `componentDescription` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Description for component.

#### `componentItemName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of component item.

#### `componentLifeCycleDefinitionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

\*\*DEPRECATED\*\* Use `componentLifeCycleDefinitionNodeId` instead with a value from `DesLifeCycleDefinition.id`.

#### `componentLifeCycleDefinitionNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

Life cycle definition identifier for component.

#### `componentParentFolderId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

Destination parent folder identifier for releasing a component. If omitted or empty, `componentReleaseFolder` is required.

#### `componentReleaseFolder` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New child folder name for releasing a component. If omitted or empty, `componentParentFolderId` is required.

#### `componentRevisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

\*\*DEPRECATED\*\* Use `componentRevisionNamingSchemeNodeId` instead with a value from `DesRevisionNamingScheme.id`.

#### `componentRevisionNamingSchemeNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

Revision naming scheme identifier for component.

#### `componentTemplateId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The component template identifier. The released component is linked to this template; its component type is inherited unless `componentTypeId` is set.

#### `componentTypeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The component type identifier. If omitted or set as `null`, no component type will be assigned.

#### `datasheetReleaseFolder` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The datasheet folder path, existing or to be created.

#### `datasheetReleaseFolderItemNamingSchemeTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Naming scheme template for the datasheet folder.

#### `datasheets` · [`[DesReleaseComponentDatasheetInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-datasheet-input.md) list input

Datasheets for component.

#### `footprintFiles` · [`[DesReleaseComponentFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-file-input.md) list input

The footprint files. Either `footprintFiles` or `footprints` must be provided.

#### `footprintItemName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The footprint name. Use null to be generated.

#### `footprintLifeCycleDefinitionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

\*\*DEPRECATED\*\* Use `footprintLifeCycleDefinitionNodeId` instead with a value from `DesLifeCycleDefinition.id`.

#### `footprintLifeCycleDefinitionNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The footprint life cycle definition identifier.

#### `footprintReleaseFolder` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The footprint folder path, existing or to be created. Required when `footprintFiles` are provided.

#### `footprintRevisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

\*\*DEPRECATED\*\* Use `footprintRevisionNamingSchemeNodeId` instead with a value from `DesRevisionNamingScheme.id`.

#### `footprintRevisionNamingSchemeNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The footprint revision naming scheme identifier.

#### `footprints` · [`[DesReleaseComponentFootprintInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-footprint-input.md) list input

Existing footprints to include. Either `footprintFiles` or `footprints` must be provided.

#### `parameters` · [`[DesRevisionParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-revision-parameter-input.md) non-null input

Parameters for component.

#### `symbol` · [`DesReleaseComponentSymbolInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-symbol-input.md) input

Existing symbol to include. Either `symbolFiles` or `symbol` must be provided.

#### `symbolFiles` · [`[DesReleaseComponentFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-file-input.md) list input

The symbol files. Either `symbolFiles` or `symbol` must be provided.

#### `symbolItemName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The symbol name. Use null to be generated.

#### `symbolLifeCycleDefinitionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

\*\*DEPRECATED\*\* Use `symbolLifeCycleDefinitionNodeId` instead with a value from `DesLifeCycleDefinition.id`.

#### `symbolLifeCycleDefinitionNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The symbol life cycle definition identifier.

#### `symbolReleaseFolder` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The symbol folder path, existing or to be created. Required when `symbolFiles` are provided.

#### `symbolRevisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

\*\*DEPRECATED\*\* Use `symbolRevisionNamingSchemeNodeId` instead with a value from `DesRevisionNamingScheme.id`.

#### `symbolRevisionNamingSchemeNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The symbol revision naming scheme identifier.

#### `useExistingComponentReleaseFolder` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

When `componentReleaseFolder` is set, tells to use existing folder if any, otherwise create a new folder.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Workspace URL for releasing a component.
