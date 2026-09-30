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

#### `DesCadDesign.boardAreas` · [`[DesCadBoardArea!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-area.md) list object design

CAD design board areas.

#### `DesCadDesign.boardBendingLines` · [`[DesCadBendingLine!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-bending-line.md) list object design

CAD design board bending lines.

#### `DesCadDesign.boardColor` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

CAD design board color.

#### `DesCadDesign.boardCoreColor` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar common

CAD design board core color.

#### `DesCadDesign.boardCoreOpacity` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD design board core opacity.

#### `DesCadDesign.boardLayers` · [`[DesCadBoardLayer!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-layer.md) list object design

CAD design board layers.

#### `DesCadDesign.boardOffsetMcadToEcadOrigin` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

CAD design board offset MCAD to ECAD origin.

#### `DesCadDesign.boardOrigin` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

CAD design board origin.

#### `DesCadDesign.boardOutlineJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*ComplexShape\*.

#### `DesCadDesign.boardRegions` · [`[DesCadBoardRegion!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-region.md) list object design

CAD design board regions.

#### `DesCadDesign.boardSplitLines` · [`[DesCadSplitLine!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-split-line.md) list object design

CAD design board split lines.

#### `DesCadDesign.boardThickness` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD design board thickness.

#### `DesCadDesign.collaborationFlags` · [`[DesCadBoardCollaborationFlag!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-collaboration-flag.md) non-null enum design

CAD design collaboration flags.

#### `DesCadDesign.componentTypes` · [`[DesCadBoardComponentType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) list object design

CAD design component types.

#### `DesCadDesign.coordinateSystemTranslation` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

CAD design coordinates system translation.

#### `DesCadDesign.copperExportFeatures` · [`[DesCadBoardCopperExportFeature!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-copper-export-feature.md) non-null enum design

CAD design copper export features.

#### `DesCadDesign.copperLayers` · [`[DesCadBoardCopperLayer!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-copper-layer.md) list object design

CAD design copper layers.

#### `DesCadDesign.copperRegions` · [`[DesCadBoardCopperRegion!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-copper-region.md) list object design

CAD design copper regions.

#### `DesCadDesign.cutouts` · [`[DesCadBoardCutout!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-cutout.md) list object design

CAD design cutouts.

#### `DesCadDesign.designFileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD design file name.

#### `DesCadDesign.designVariantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD design variant identifier.

#### `DesCadDesign.designVariantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD design variant name.

#### `DesCadDesign.hasHatchedCopperPolygons` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD design has hatched copper polygons.

#### `DesCadDesign.holes` · [`[DesCadBoardHole!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-hole.md) list object design

CAD design holes.

#### `DesCadDesign.isRF20Design` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD design is a RF20 design.

#### `DesCadDesign.layersExportMode` · [`DesCadLayersExportMode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-layers-export-mode.md) non-null enum design

Mode of export for CAD design.

#### `DesCadDesign.messages` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

CAD design messages.

#### `DesCadDesign.minimalHeightComponentsShown` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD design minimal height of the components shown.

#### `DesCadDesign.properties` · [`[DesCadProperty!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-property.md) list object design

CAD design properties.

#### `DesCadDesign.tracks` · [`[DesCadBoardTrack!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-track.md) list object design

CAD design tracks.

#### `DesCadDesign.variants` · [`DesCadBoardVariants`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variants.md) object design

CAD design variants.

#### `DesCadDesign.vias` · [`[DesCadBoardVia!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-via.md) list object design

CAD design vias.

#### `DesCadDesign.workflowState` · [`DesCadWorkflowState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-workflow-state.md) non-null enum design

CAD design workflow state.
