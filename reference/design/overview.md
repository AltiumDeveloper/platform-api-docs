---
title: "Design"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/overview"
bounded_context: "Design"
kind: "overview"
experimental: false
deprecated: false
---

# Design

Hardware projects, design data, rule checks, comparisons and project releases.

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/design/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/design/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types.txt)

## Common Data Model

- [Design](https://altiumdeveloper.github.io/cdm/subsets/design/) — Models design projects stored in a Workspace, including multi-board and harness projects, with their parameters, variants and releases, the manufacturing packages shared from releases, project templates with their revisions, and rule checks run against projects. It corresponds to Workspace projects in Altium 365 and Altium Designer, from project creation through to design release.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) | [PCB Component](https://w3id.org/altium/cdm/design/PcbComponent) [`https://w3id.org/altium/cdm/design/PcbComponent`](https://w3id.org/altium/cdm/design/PcbComponent) |
| [`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) | [Compiled Design](https://w3id.org/altium/cdm/design/CompiledDesign) [`https://w3id.org/altium/cdm/design/CompiledDesign`](https://w3id.org/altium/cdm/design/CompiledDesign) |
| [`DesignDataComponent_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-component-preview.md) | [Placed Component](https://w3id.org/altium/cdm/design/PlacedComponent) [`https://w3id.org/altium/cdm/design/PlacedComponent`](https://w3id.org/altium/cdm/design/PlacedComponent) |
| [`DesignDataDifferentialPair_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-differential-pair-preview.md) | [Differential Pair](https://w3id.org/altium/cdm/design/DifferentialPair) [`https://w3id.org/altium/cdm/design/DifferentialPair`](https://w3id.org/altium/cdm/design/DifferentialPair) |
| [`DesignDataLine_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-line-preview.md) | [Wire](https://w3id.org/altium/cdm/design/Wire) [`https://w3id.org/altium/cdm/design/Wire`](https://w3id.org/altium/cdm/design/Wire) |
| [`DesignDataNet_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-preview.md) | [Net](https://w3id.org/altium/cdm/design/Net) [`https://w3id.org/altium/cdm/design/Net`](https://w3id.org/altium/cdm/design/Net) |
| [`DesignDataNetItem_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-item-preview.md) | [Net Item](https://w3id.org/altium/cdm/design/NetItem) [`https://w3id.org/altium/cdm/design/NetItem`](https://w3id.org/altium/cdm/design/NetItem) |
| [`DesignDataPart_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-preview.md) | [Component Part](https://w3id.org/altium/cdm/design/ComponentPart) [`https://w3id.org/altium/cdm/design/ComponentPart`](https://w3id.org/altium/cdm/design/ComponentPart) |
| [`DesignDataPin_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-preview.md) | [Pin Instance](https://w3id.org/altium/cdm/design/PinInstance) [`https://w3id.org/altium/cdm/design/PinInstance`](https://w3id.org/altium/cdm/design/PinInstance) |
| [`DesignDataSchematicDocument_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-schematic-document-preview.md) | [Schematic Sheet](https://w3id.org/altium/cdm/design/SchematicSheet) [`https://w3id.org/altium/cdm/design/SchematicSheet`](https://w3id.org/altium/cdm/design/SchematicSheet) |
| [`DesignDataVariation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-variation-preview.md) | [Variant Variation](https://w3id.org/altium/cdm/design/VariantVariation) [`https://w3id.org/altium/cdm/design/VariantVariation`](https://w3id.org/altium/cdm/design/VariantVariation) |
| [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) | [Board Layer](https://w3id.org/altium/cdm/design/BoardLayer) [`https://w3id.org/altium/cdm/design/BoardLayer`](https://w3id.org/altium/cdm/design/BoardLayer) |
| [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) | [PCB Net](https://w3id.org/altium/cdm/design/PcbNet) [`https://w3id.org/altium/cdm/design/PcbNet`](https://w3id.org/altium/cdm/design/PcbNet) |
| [`DesPad`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) | [Pad](https://w3id.org/altium/cdm/design/Pad) [`https://w3id.org/altium/cdm/design/Pad`](https://w3id.org/altium/cdm/design/Pad) |
| [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) | [PCB Layout](https://w3id.org/altium/cdm/design/PcbLayout) [`https://w3id.org/altium/cdm/design/PcbLayout`](https://w3id.org/altium/cdm/design/PcbLayout) |
| [`DesPosition2D`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) | [Point 2D](https://w3id.org/altium/cdm/design/Point2D) [`https://w3id.org/altium/cdm/design/Point2D`](https://w3id.org/altium/cdm/design/Point2D) |
| [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) | [Hardware Project](https://w3id.org/altium/cdm/design/Project) [`https://w3id.org/altium/cdm/design/Project`](https://w3id.org/altium/cdm/design/Project) |
| [`DesProjectParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-parameter.md) | [Project Parameter](https://w3id.org/altium/cdm/design/ProjectParameter) [`https://w3id.org/altium/cdm/design/ProjectParameter`](https://w3id.org/altium/cdm/design/ProjectParameter) |
| [`DesRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle.md) | [Rectangle 2D](https://w3id.org/altium/cdm/design/Rectangle2D) [`https://w3id.org/altium/cdm/design/Rectangle2D`](https://w3id.org/altium/cdm/design/Rectangle2D) |
| [`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) | [Hardware Project Release](https://w3id.org/altium/cdm/design/ProjectRelease) [`https://w3id.org/altium/cdm/design/ProjectRelease`](https://w3id.org/altium/cdm/design/ProjectRelease) |
| [`DesStack`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stack.md) | [Layer Stack](https://w3id.org/altium/cdm/design/LayerStack) [`https://w3id.org/altium/cdm/design/LayerStack`](https://w3id.org/altium/cdm/design/LayerStack) |
| [`DesStackup`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stackup.md) | [Layer Stackup](https://w3id.org/altium/cdm/design/Stackup) [`https://w3id.org/altium/cdm/design/Stackup`](https://w3id.org/altium/cdm/design/Stackup) |
| [`DesTrack`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) | [Track](https://w3id.org/altium/cdm/design/Track) [`https://w3id.org/altium/cdm/design/Track`](https://w3id.org/altium/cdm/design/Track) |
| [`DesVia`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) | [Via](https://w3id.org/altium/cdm/design/Via) [`https://w3id.org/altium/cdm/design/Via`](https://w3id.org/altium/cdm/design/Via) |
| [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) | [Hardware Project Variant](https://w3id.org/altium/cdm/design/ProjectVariant) [`https://w3id.org/altium/cdm/design/ProjectVariant`](https://w3id.org/altium/cdm/design/ProjectVariant) |
| [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) | [Rule Check](https://w3id.org/altium/cdm/design/RuleCheck) [`https://w3id.org/altium/cdm/design/RuleCheck`](https://w3id.org/altium/cdm/design/RuleCheck) |
| [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) | [Rule Check Execution](https://w3id.org/altium/cdm/design/RuleCheckExecution) [`https://w3id.org/altium/cdm/design/RuleCheckExecution`](https://w3id.org/altium/cdm/design/RuleCheckExecution) |

## Entry points

Look up entities by identifier:

- [`design.ruleCheck.byId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-id.md)
- [`design.ruleCheck.byIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-ids.md)
- [`design.ruleCheckExecution.byId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-id.md)
- [`design.ruleCheckExecution.byIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-ids.md)
- [`desProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id.md)
- [`desProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects-by-ids.md)
- [`desReleaseById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-release-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 30 | 18 |
| Mutations | 11 | 3 |
| Objects | 146 | 41 |
| Inputs | 59 | 8 |
| Enums | 26 | 0 |
