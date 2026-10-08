---
title: "DesCadDesign"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadDesign

Information about a CAD design file.

### Member Of

[`DesCollaborationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) object

```graphql
type DesCadDesign {
  boardAreas: [DesCadBoardArea!]
  boardBendingLines: [DesCadBendingLine!]
  boardColor: Long!
  boardCoreColor: Long
  boardCoreOpacity: Float
  boardLayers: [DesCadBoardLayer!]
  boardOffsetMcadToEcadOrigin: DesCadPoint!
  boardOrigin: DesCadPoint!
  boardOutlineJson: String
  boardRegions: [DesCadBoardRegion!]
  boardSplitLines: [DesCadSplitLine!]
  boardThickness: Int!
  collaborationFlags: [DesCadBoardCollaborationFlag!]!
  componentTypes: [DesCadBoardComponentType!]
  coordinateSystemTranslation: DesCadPoint!
  copperExportFeatures: [DesCadBoardCopperExportFeature!]!
  copperLayers: [DesCadBoardCopperLayer!]
  copperRegions: [DesCadBoardCopperRegion!]
  cutouts: [DesCadBoardCutout!]
  designFileName: String
  designVariantId: String
  designVariantName: String
  hasHatchedCopperPolygons: Boolean!
  holes: [DesCadBoardHole!]
  isRF20Design: Boolean!
  layersExportMode: DesCadLayersExportMode!
  messages: [String!]
  minimalHeightComponentsShown: Int!
  properties: [DesCadProperty!]
  tracks: [DesCadBoardTrack!]
  variants: DesCadBoardVariants
  vias: [DesCadBoardVia!]
  workflowState: DesCadWorkflowState!
}
```

### Fields

#### `boardAreas` · [`[DesCadBoardArea!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-area.md) list object

CAD design board areas.

#### `boardBendingLines` · [`[DesCadBendingLine!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-bending-line.md) list object

CAD design board bending lines.

#### `boardColor` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

CAD design board color.

#### `boardCoreColor` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar

CAD design board core color.

#### `boardCoreOpacity` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

CAD design board core opacity.

#### `boardLayers` · [`[DesCadBoardLayer!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-layer.md) list object

CAD design board layers.

#### `boardOffsetMcadToEcadOrigin` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

CAD design board offset MCAD to ECAD origin.

#### `boardOrigin` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

CAD design board origin.

#### `boardOutlineJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*ComplexShape\*.

#### `boardRegions` · [`[DesCadBoardRegion!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-region.md) list object

CAD design board regions.

#### `boardSplitLines` · [`[DesCadSplitLine!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-split-line.md) list object

CAD design board split lines.

#### `boardThickness` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD design board thickness.

#### `collaborationFlags` · [`[DesCadBoardCollaborationFlag!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-collaboration-flag.md) non-null enum

CAD design collaboration flags.

#### `componentTypes` · [`[DesCadBoardComponentType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) list object

CAD design component types.

#### `coordinateSystemTranslation` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

CAD design coordinates system translation.

#### `copperExportFeatures` · [`[DesCadBoardCopperExportFeature!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-copper-export-feature.md) non-null enum

CAD design copper export features.

#### `copperLayers` · [`[DesCadBoardCopperLayer!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-copper-layer.md) list object

CAD design copper layers.

#### `copperRegions` · [`[DesCadBoardCopperRegion!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-copper-region.md) list object

CAD design copper regions.

#### `cutouts` · [`[DesCadBoardCutout!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-cutout.md) list object

CAD design cutouts.

#### `designFileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD design file name.

#### `designVariantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD design variant identifier.

#### `designVariantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD design variant name.

#### `hasHatchedCopperPolygons` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD design has hatched copper polygons.

#### `holes` · [`[DesCadBoardHole!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-hole.md) list object

CAD design holes.

#### `isRF20Design` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD design is a RF20 design.

#### `layersExportMode` · [`DesCadLayersExportMode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-layers-export-mode.md) non-null enum

Mode of export for CAD design.

#### `messages` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

CAD design messages.

#### `minimalHeightComponentsShown` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD design minimal height of the components shown.

#### `properties` · [`[DesCadProperty!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-property.md) list object

CAD design properties.

#### `tracks` · [`[DesCadBoardTrack!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-track.md) list object

CAD design tracks.

#### `variants` · [`DesCadBoardVariants`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variants.md) object

CAD design variants.

#### `vias` · [`[DesCadBoardVia!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-via.md) list object

CAD design vias.

#### `workflowState` · [`DesCadWorkflowState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-workflow-state.md) non-null enum

CAD design workflow state.
