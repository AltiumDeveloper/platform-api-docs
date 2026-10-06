---
title: "DesWipVariant"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesWipVariant

A variant contains a specific configuration of a base design.

### Common Data Model

- [Hardware Project Variant](https://altiumdeveloper.github.io/cdm/classes/des_ProjectVariant/) — A design variant of a project: a named variation of the same base design that is assembled with a different set of components. Within a variant, each component can be fitted, not fitted, fitted with varied parameters, or replaced by an alternate part, and the variant can define its own variant-level parameters. Assembly variants share one bare board, whereas fabrication variants also change overlay information and so need a different board.

### Returned By

[`desWipVariantByVariantName`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-wip-variant-by-variant-name.md) query

### Member Of

[`DesDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design.md) object · [`DesWorkInProgress`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-work-in-progress.md) object

```graphql
type DesWipVariant {
  bom: DesBom
  designExchange: DesDesignExchange
  name: String!
  pcb: DesPcb
  projectId: ID! @deprecated
  schematics(
    where: DesSchematicFilterInput
  ): [DesSchematic!]!
  systemDiagram: DesSystemDiagram
}
```

### Fields

#### `DesWipVariant.bom` · [`DesBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom.md) object design

The Bill of Materials (BOM) for this design variant.

#### `DesWipVariant.designExchange` · [`DesDesignExchange`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-exchange.md) object design

The design exchange information.

#### `DesWipVariant.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The descriptive label for this design variant.

#### `DesWipVariant.pcb` · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object design

The PCB document for this design variant.

#### `DesWipVariant.schematics` · [`[DesSchematic!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-schematic.md) non-null object design

The list of schematic documents for this design variant.

##### `DesWipVariant.schematics.where` · [`DesSchematicFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-schematic-filter-input.md) input design

#### `DesWipVariant.systemDiagram` · [`DesSystemDiagram`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-system-diagram.md) object design

The system diagram for this design variant.

#### Deprecated

#### `DesWipVariant.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** This is temporary to illustrate project identifier as GRID\`.
