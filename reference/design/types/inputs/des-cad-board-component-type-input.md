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

#### `bodyShape` · [`DesCadComponentBodyShapeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-component-body-shape-input.md) input

Body shape for CAD board component type.

#### `companyComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifier for company component.

#### `components` · [`[DesCadBoardComponentInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-input.md) list input

Components for CAD board component type.

#### `dmsComponentName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

DMS component name for CAD board component type.

#### `footprintReference` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Footprint reference for CAD board component type.

#### `id` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifier for CAD board component type.

#### `internalId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Internal unique identifier for CAD board component type.

#### `isFromLocalPcbLibrary` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the CAD board component type is from local PCB library or not.

#### `itemGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

GUID for CAD board component type item.

#### `libraryReference` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Library reference for CAD board component type.

#### `properties` · [`[DesCadPropertyInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-property-input.md) list input

Properties for CAD board component type.

#### `revisionGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

GUID for CAD board component type revision.
