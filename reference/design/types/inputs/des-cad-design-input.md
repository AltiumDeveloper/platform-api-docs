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

#### `boardAreas` · [`[DesCadBoardAreaInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-area-input.md) list input

CAD design board areas.

#### `boardBendingLines` · [`[DesCadBendingLineInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-bending-line-input.md) list input

CAD design board bending lines.

#### `boardColor` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar

CAD design board color.

#### `boardCoreColor` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar

CAD design board core color.

#### `boardCoreOpacity` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

CAD design board core opacity.

#### `boardLayers` · [`[DesCadBoardLayerInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-layer-input.md) list input

CAD design board layers.

#### `boardOffsetMcadToEcadOrigin` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD design board offset MCAD to ECAD origin.

#### `boardOrigin` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD design board origin.

#### `boardOutlineJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*ComplexShape\*.

#### `boardRegions` · [`[DesCadBoardRegionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-region-input.md) list input

CAD design board regions.

#### `boardSplitLines` · [`[DesCadSplitLineInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-split-line-input.md) list input

CAD design board split lines.

#### `boardThickness` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD design board thickness.

#### `collaborationFlags` · [`[DesCadBoardCollaborationFlag!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-collaboration-flag.md) list enum

CAD design collaboration flags.

#### `componentTypes` · [`[DesCadBoardComponentTypeInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-type-input.md) list input

CAD design component types.

#### `coordinateSystemTranslation` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD design coordinate system translation.

#### `copperExportFeatures` · [`[DesCadBoardCopperExportFeature!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-copper-export-feature.md) list enum

CAD design copper export features.

#### `copperLayers` · [`[DesCadBoardCopperLayerInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-copper-layer-input.md) list input

CAD design copper layers.

#### `copperRegions` · [`[DesCadBoardCopperRegionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-copper-region-input.md) list input

CAD design copper regions.

#### `cutouts` · [`[DesCadBoardCutoutInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-cutout-input.md) list input

CAD design cutouts.

#### `designFileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD design file name.

#### `designVariantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD design variant identifier.

#### `designVariantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD design variant name.

#### `hasHatchedCopperPolygons` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether CAD design has hatched copper polygons or not.

#### `holes` · [`[DesCadBoardHoleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-hole-input.md) list input

CAD design holes.

#### `isRF20Design` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether CAD design is a RF20 design or not.

#### `layersExportMode` · [`DesCadLayersExportMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-layers-export-mode.md) enum

CAD design export mode.

#### `messages` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

CAD design messages.

#### `minimalHeightComponentsShown` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD design minimal height of components shown.

#### `properties` · [`[DesCadPropertyInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-property-input.md) list input

CAD design properties.

#### `tracks` · [`[DesCadBoardTrackInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-track-input.md) list input

CAD design tracks.

#### `variants` · [`DesCadBoardVariantsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variants-input.md) input

CAD design variants.

#### `vias` · [`[DesCadBoardViaInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-via-input.md) list input

CAD design vias.

#### `workflowState` · [`DesCadWorkflowState`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-workflow-state.md) enum

CAD design workflow state.
