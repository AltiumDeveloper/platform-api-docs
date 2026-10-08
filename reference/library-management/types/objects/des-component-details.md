---
title: "DesComponentDetails"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentDetails

Detailed component information.

### Member Of

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object

```graphql
type DesComponentDetails {
  datasheets: [DesDatasheet!]!
  footprints: [DesFootprint!]!
  itemInternalId: String!
  itemParameters: [DesComponentParameter!]!
  parameters: [DesComponentParameter!]!
  simulations: [DesSimulation!]!
  symbols: [DesSymbol!]!
}
```

### Fields

#### `datasheets` · [`[DesDatasheet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) non-null object

The list of component datasheets.

#### `footprints` · [`[DesFootprint!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) non-null object

The list of component footprints.

#### `itemInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The component item internal identifier.

#### `itemParameters` · [`[DesComponentParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-parameter.md) non-null object

The list of parameters describing the item.

#### `parameters` · [`[DesComponentParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-parameter.md) non-null object

The list of revision level parameters from the latest revision. Parameter types are unknown (`NONE`) for unmanaged components.

#### `simulations` · [`[DesSimulation!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-simulation.md) non-null object

The list of component simuation models.

#### `symbols` · [`[DesSymbol!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) non-null object

The list of component symbols.
