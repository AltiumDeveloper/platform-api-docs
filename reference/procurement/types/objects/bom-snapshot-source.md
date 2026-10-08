---
title: "BomSnapshotSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-snapshot-source"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomSnapshotSource

Describes the source BOM snapshot used to create the current BOM.

### Interfaces

#### [`BomSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) interface

Describes the source used to create the current BOM (e.g., a file, a design, or other BOM).

```graphql
type BomSnapshotSource implements BomSource {
  bomId: String!
  quantity: Int!
  snapshotId: String!
}
```

### Fields

#### `bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the BOM.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Quantity of the source (i.e., how many times the source is included into this BOM).

#### `snapshotId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the BOM snapshot.
