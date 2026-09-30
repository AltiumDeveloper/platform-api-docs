---
title: "DesCadDesignInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadDesignInput

Input for CAD design.

### Member Of

[`DesUploadCollaborationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-upload-collaboration-input.md) input

```graphql
input DesCadDesignInput {
  boardAreas: [DesCadBoardAreaInput!]
  boardBendingLines: [DesCadBendingLineInput!]
  boardColor: Long
  boardCoreColor: Long
  boardCoreOpacity: Float
  boardLayers: [DesCadBoardLayerInput!]
  boardOffsetMcadToEcadOrigin: DesCadBoardPointInput
  boardOrigin: DesCadBoardPointInput
  boardOutlineJson: String
  boardRegions: [DesCadBoardRegionInput!]
  boardSplitLines: [DesCadSplitLineInput!]
  boardThickness: Int
  collaborationFlags: [DesCadBoardCollaborationFlag!]
  componentTypes: [DesCadBoardComponentTypeInput!]
  coordinateSystemTranslation: DesCadBoardPointInput
  copperExportFeatures: [DesCadBoardCopperExportFeature!]
  copperLayers: [DesCadBoardCopperLayerInput!]
  copperRegions: [DesCadBoardCopperRegionInput!]
  cutouts: [DesCadBoardCutoutInput!]
  designFileName: String
  designVariantId: String
  designVariantName: String
  hasHatchedCopperPolygons: Boolean
  holes: [DesCadBoardHoleInput!]
  isRF20Design: Boolean
  layersExportMode: DesCadLayersExportMode
  messages: [String!]
  minimalHeightComponentsShown: Int
  properties: [DesCadPropertyInput!]
  tracks: [DesCadBoardTrackInput!]
  variants: DesCadBoardVariantsInput
  vias: [DesCadBoardViaInput!]
  workflowState: DesCadWorkflowState
}
```

### Fields

#### `DesCadDesignInput.boardAreas` · [`[DesCadBoardAreaInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-area-input.md) list input design

CAD design board areas.

#### `DesCadDesignInput.boardBendingLines` · [`[DesCadBendingLineInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-bending-line-input.md) list input design

CAD design board bending lines.

#### `DesCadDesignInput.boardColor` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar common

CAD design board color.

#### `DesCadDesignInput.boardCoreColor` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar common

CAD design board core color.

#### `DesCadDesignInput.boardCoreOpacity` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD design board core opacity.

#### `DesCadDesignInput.boardLayers` · [`[DesCadBoardLayerInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-layer-input.md) list input design

CAD design board layers.

#### `DesCadDesignInput.boardOffsetMcadToEcadOrigin` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD design board offset MCAD to ECAD origin.

#### `DesCadDesignInput.boardOrigin` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD design board origin.

#### `DesCadDesignInput.boardOutlineJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*ComplexShape\*.

#### `DesCadDesignInput.boardRegions` · [`[DesCadBoardRegionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-region-input.md) list input design

CAD design board regions.

#### `DesCadDesignInput.boardSplitLines` · [`[DesCadSplitLineInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-split-line-input.md) list input design

CAD design board split lines.

#### `DesCadDesignInput.boardThickness` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD design board thickness.

#### `DesCadDesignInput.collaborationFlags` · [`[DesCadBoardCollaborationFlag!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-collaboration-flag.md) list enum design

CAD design collaboration flags.

#### `DesCadDesignInput.componentTypes` · [`[DesCadBoardComponentTypeInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-type-input.md) list input design

CAD design component types.

#### `DesCadDesignInput.coordinateSystemTranslation` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD design coordinate system translation.

#### `DesCadDesignInput.copperExportFeatures` · [`[DesCadBoardCopperExportFeature!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-copper-export-feature.md) list enum design

CAD design copper export features.

#### `DesCadDesignInput.copperLayers` · [`[DesCadBoardCopperLayerInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-copper-layer-input.md) list input design

CAD design copper layers.

#### `DesCadDesignInput.copperRegions` · [`[DesCadBoardCopperRegionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-copper-region-input.md) list input design

CAD design copper regions.

#### `DesCadDesignInput.cutouts` · [`[DesCadBoardCutoutInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-cutout-input.md) list input design

CAD design cutouts.

#### `DesCadDesignInput.designFileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD design file name.

#### `DesCadDesignInput.designVariantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD design variant identifier.

#### `DesCadDesignInput.designVariantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD design variant name.

#### `DesCadDesignInput.hasHatchedCopperPolygons` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether CAD design has hatched copper polygons or not.

#### `DesCadDesignInput.holes` · [`[DesCadBoardHoleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-hole-input.md) list input design

CAD design holes.

#### `DesCadDesignInput.isRF20Design` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether CAD design is a RF20 design or not.

#### `DesCadDesignInput.layersExportMode` · [`DesCadLayersExportMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-layers-export-mode.md) enum design

CAD design export mode.

#### `DesCadDesignInput.messages` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

CAD design messages.

#### `DesCadDesignInput.minimalHeightComponentsShown` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD design minimal height of components shown.

#### `DesCadDesignInput.properties` · [`[DesCadPropertyInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-property-input.md) list input design

CAD design properties.

#### `DesCadDesignInput.tracks` · [`[DesCadBoardTrackInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-track-input.md) list input design

CAD design tracks.

#### `DesCadDesignInput.variants` · [`DesCadBoardVariantsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variants-input.md) input design

CAD design variants.

#### `DesCadDesignInput.vias` · [`[DesCadBoardViaInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-via-input.md) list input design

CAD design vias.

#### `DesCadDesignInput.workflowState` · [`DesCadWorkflowState`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-workflow-state.md) enum design

CAD design workflow state.
