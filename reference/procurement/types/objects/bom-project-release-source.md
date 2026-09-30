---
title: "BomProjectReleaseSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-project-release-source"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomProjectReleaseSource

Describes the source project release used to create the current BOM.

### Interfaces

#### [`BomSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) interface procurement

Describes the source used to create the current BOM (e.g., a file, a design, or other BOM).

```graphql
type BomProjectReleaseSource implements BomSource {
  designId: String!
  quantity: Int!
  sourceRevisionId: String!
}
```

### Fields

#### `BomProjectReleaseSource.designId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the design.

#### `BomProjectReleaseSource.quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Quantity of the source (i.e., how many times the source is included into this BOM).

#### `BomProjectReleaseSource.sourceRevisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the source revision used to create the BOM.
