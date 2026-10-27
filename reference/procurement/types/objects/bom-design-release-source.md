---
title: "BomDesignReleaseSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-design-release-source"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomDesignReleaseSource

Describes the source design release used to create the current BOM.

### Interfaces

#### [`BomSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) interface

Describes the source used to create the current BOM (e.g., a file, a design, or other BOM).

```graphql
type BomDesignReleaseSource implements BomSource {
  assemblyRevisionId: String!
  designId: String!
  quantity: Int!
  sourceRevisionId: String!
}
```

### Fields

#### `assemblyRevisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the assembly used to create the BOM.

#### `designId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the design.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Quantity of the source (i.e., how many times the source is included into this BOM).

#### `sourceRevisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the source revision used to create the BOM.
