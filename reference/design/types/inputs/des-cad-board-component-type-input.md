---
title: "DesCadBoardComponentTypeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-type-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardComponentTypeInput

Input for CAD board component type.

### Member Of

[`DesCadBoardVariantsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variants-input.md) input · [`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardComponentTypeInput {
  bodyShape: DesCadComponentBodyShapeInput
  companyComponentId: String
  components: [DesCadBoardComponentInput!]
  dmsComponentName: String
  footprintReference: String
  id: String
  internalId: String
  isFromLocalPcbLibrary: Boolean
  itemGuid: String
  libraryReference: String
  properties: [DesCadPropertyInput!]
  revisionGuid: String
}
```

### Fields

#### `DesCadBoardComponentTypeInput.bodyShape` · [`DesCadComponentBodyShapeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-component-body-shape-input.md) input design

Body shape for CAD board component type.

#### `DesCadBoardComponentTypeInput.companyComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Identifier for company component.

#### `DesCadBoardComponentTypeInput.components` · [`[DesCadBoardComponentInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-input.md) list input design

Components for CAD board component type.

#### `DesCadBoardComponentTypeInput.dmsComponentName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

DMS component name for CAD board component type.

#### `DesCadBoardComponentTypeInput.footprintReference` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Footprint reference for CAD board component type.

#### `DesCadBoardComponentTypeInput.id` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Identifier for CAD board component type.

#### `DesCadBoardComponentTypeInput.internalId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Internal unique identifier for CAD board component type.

#### `DesCadBoardComponentTypeInput.isFromLocalPcbLibrary` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board component type is from local PCB library or not.

#### `DesCadBoardComponentTypeInput.itemGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

GUID for CAD board component type item.

#### `DesCadBoardComponentTypeInput.libraryReference` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Library reference for CAD board component type.

#### `DesCadBoardComponentTypeInput.properties` · [`[DesCadPropertyInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-property-input.md) list input design

Properties for CAD board component type.

#### `DesCadBoardComponentTypeInput.revisionGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

GUID for CAD board component type revision.
