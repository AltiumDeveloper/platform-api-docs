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

#### `DesReleaseComponentInput.componentComment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment for component.

#### `DesReleaseComponentInput.componentDescription` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Description for component.

#### `DesReleaseComponentInput.componentItemName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of component item.

#### `DesReleaseComponentInput.componentLifeCycleDefinitionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

\*\*DEPRECATED\*\* Use `componentLifeCycleDefinitionNodeId` instead with a value from `DesLifeCycleDefinition.id`.

#### `DesReleaseComponentInput.componentLifeCycleDefinitionNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

Life cycle definition identifier for component.

#### `DesReleaseComponentInput.componentParentFolderId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

Destination parent folder identifier for releasing a component. If omitted or empty, `componentReleaseFolder` is required.

#### `DesReleaseComponentInput.componentReleaseFolder` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

New child folder name for releasing a component. If omitted or empty, `componentParentFolderId` is required.

#### `DesReleaseComponentInput.componentRevisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

\*\*DEPRECATED\*\* Use `componentRevisionNamingSchemeNodeId` instead with a value from `DesRevisionNamingScheme.id`.

#### `DesReleaseComponentInput.componentRevisionNamingSchemeNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

Revision naming scheme identifier for component.

#### `DesReleaseComponentInput.componentTemplateId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The component template identifier. The released component is linked to this template; its component type is inherited unless `componentTypeId` is set.

#### `DesReleaseComponentInput.componentTypeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The component type identifier. If omitted or set as `null`, no component type will be assigned.

#### `DesReleaseComponentInput.datasheetReleaseFolder` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The datasheet folder path, existing or to be created.

#### `DesReleaseComponentInput.datasheetReleaseFolderItemNamingSchemeTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Naming scheme template for the datasheet folder.

#### `DesReleaseComponentInput.datasheets` · [`[DesReleaseComponentDatasheetInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-datasheet-input.md) list input library-management

Datasheets for component.

#### `DesReleaseComponentInput.footprintFiles` · [`[DesReleaseComponentFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-file-input.md) list input library-management

The footprint files. Either `footprintFiles` or `footprints` must be provided.

#### `DesReleaseComponentInput.footprintItemName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The footprint name. Use null to be generated.

#### `DesReleaseComponentInput.footprintLifeCycleDefinitionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

\*\*DEPRECATED\*\* Use `footprintLifeCycleDefinitionNodeId` instead with a value from `DesLifeCycleDefinition.id`.

#### `DesReleaseComponentInput.footprintLifeCycleDefinitionNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The footprint life cycle definition identifier.

#### `DesReleaseComponentInput.footprintReleaseFolder` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The footprint folder path, existing or to be created. Required when `footprintFiles` are provided.

#### `DesReleaseComponentInput.footprintRevisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

\*\*DEPRECATED\*\* Use `footprintRevisionNamingSchemeNodeId` instead with a value from `DesRevisionNamingScheme.id`.

#### `DesReleaseComponentInput.footprintRevisionNamingSchemeNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The footprint revision naming scheme identifier.

#### `DesReleaseComponentInput.footprints` · [`[DesReleaseComponentFootprintInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-footprint-input.md) list input library-management

Existing footprints to include. Either `footprintFiles` or `footprints` must be provided.

#### `DesReleaseComponentInput.parameters` · [`[DesRevisionParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-revision-parameter-input.md) non-null input library-management

Parameters for component.

#### `DesReleaseComponentInput.symbol` · [`DesReleaseComponentSymbolInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-symbol-input.md) input library-management

Existing symbol to include. Either `symbolFiles` or `symbol` must be provided.

#### `DesReleaseComponentInput.symbolFiles` · [`[DesReleaseComponentFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-file-input.md) list input library-management

The symbol files. Either `symbolFiles` or `symbol` must be provided.

#### `DesReleaseComponentInput.symbolItemName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The symbol name. Use null to be generated.

#### `DesReleaseComponentInput.symbolLifeCycleDefinitionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

\*\*DEPRECATED\*\* Use `symbolLifeCycleDefinitionNodeId` instead with a value from `DesLifeCycleDefinition.id`.

#### `DesReleaseComponentInput.symbolLifeCycleDefinitionNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The symbol life cycle definition identifier.

#### `DesReleaseComponentInput.symbolReleaseFolder` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The symbol folder path, existing or to be created. Required when `symbolFiles` are provided.

#### `DesReleaseComponentInput.symbolRevisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

\*\*DEPRECATED\*\* Use `symbolRevisionNamingSchemeNodeId` instead with a value from `DesRevisionNamingScheme.id`.

#### `DesReleaseComponentInput.symbolRevisionNamingSchemeNodeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The symbol revision naming scheme identifier.

#### `DesReleaseComponentInput.useExistingComponentReleaseFolder` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

When `componentReleaseFolder` is set, tells to use existing folder if any, otherwise create a new folder.

#### `DesReleaseComponentInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Workspace URL for releasing a component.
