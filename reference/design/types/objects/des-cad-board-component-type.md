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

#### `bodyShape` · [`DesCadComponentBodyShape`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-body-shape.md) object

CAD board component type body shape.

#### `companyComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board component type company component identifier.

#### `component` · [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object Library Management

The library component stitched from this CAD board component type, when available.

#### `components` · [`[DesCadBoardComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component.md) list object

CAD board component type components.

#### `dmsComponentName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of DMS component.

#### `footprint` · [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object Library Management

The selected footprint stitched from this CAD board component type, when available.

#### `footprintReference` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board component type footprint reference.

#### `id` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board component type identifier.

#### `internalId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board component type internal identifier.

#### `isFromLocalPcbLibrary` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board component type is from local PCB library.

#### `itemGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board component type item identifier.

#### `libraryReference` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board component type library reference.

#### `properties` · [`[DesCadProperty!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-property.md) list object

CAD board component type properties.

#### `revisionGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board component type revision identifier.
