---
title: "DesCadBoardComponentType"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardComponentType

Information about a CAD board component type.

### Member Of

[`DesCadBoardVariants`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variants.md) object · [`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardComponentType {
  bodyShape: DesCadComponentBodyShape
  companyComponentId: String
  component: DesComponent
  components: [DesCadBoardComponent!]
  dmsComponentName: String
  footprint: DesFootprint
  footprintReference: String
  id: String
  internalId: String
  isFromLocalPcbLibrary: Boolean!
  itemGuid: String
  libraryReference: String
  properties: [DesCadProperty!]
  revisionGuid: String
}
```

### Fields

#### `DesCadBoardComponentType.bodyShape` · [`DesCadComponentBodyShape`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-body-shape.md) object design

CAD board component type body shape.

#### `DesCadBoardComponentType.companyComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component type company component identifier.

#### `DesCadBoardComponentType.component` · [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object library-management

The library component stitched from this CAD board component type, when available.

#### `DesCadBoardComponentType.components` · [`[DesCadBoardComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component.md) list object design

CAD board component type components.

#### `DesCadBoardComponentType.dmsComponentName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of DMS component.

#### `DesCadBoardComponentType.footprint` · [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object library-management

The selected footprint stitched from this CAD board component type, when available.

#### `DesCadBoardComponentType.footprintReference` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component type footprint reference.

#### `DesCadBoardComponentType.id` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component type identifier.

#### `DesCadBoardComponentType.internalId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component type internal identifier.

#### `DesCadBoardComponentType.isFromLocalPcbLibrary` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board component type is from local PCB library.

#### `DesCadBoardComponentType.itemGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component type item identifier.

#### `DesCadBoardComponentType.libraryReference` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component type library reference.

#### `DesCadBoardComponentType.properties` · [`[DesCadProperty!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-property.md) list object design

CAD board component type properties.

#### `DesCadBoardComponentType.revisionGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component type revision identifier.
