---
title: "DesReleaseVariant"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-variant"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesReleaseVariant

A variant contains a specific configuration of a base design.

### Returned By

[`desReleaseVariantByVariantName`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-release-variant-by-variant-name.md) query

### Member Of

[`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) object

```graphql
type DesReleaseVariant {
  bom: DesBom
  downloadUrl: String!
  name: String!
  pcb: DesPcb
  pcbAssembly: DesPcbAssembly
  pcbFabrication: DesPcbFabrication
  releaseId: ID! @deprecated
  schematics(
    where: DesSchematicFilterInput
  ): [DesSchematic!]!
}
```

### Fields

#### `bom` · [`DesBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom.md) object

The Bill of Materials (BOM) for this published design variant.

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The project release package.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The descriptive label for this design variant.

#### `pcb` · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

The PCB document for this design variant.

#### `pcbAssembly` · [`DesPcbAssembly`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-assembly.md) object

The data needed for assembly of this published design variant.

#### `pcbFabrication` · [`DesPcbFabrication`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb-fabrication.md) object

The data needed for fabrication of this published design variant.

#### `schematics` · [`[DesSchematic!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-schematic.md) non-null object

The list of schematic documents for this design variant.

##### `where` · [`DesSchematicFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-schematic-filter-input.md) input

#### Deprecated

#### `releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** This is temporary to illustrate project release identifier as GRID\`.
