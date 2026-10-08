---
title: "BomReleaseSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release-source"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomReleaseSource

Describes the source BOM release used to create the current BOM.

### Interfaces

#### [`BomSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) interface

Describes the source used to create the current BOM (e.g., a file, a design, or other BOM).

```graphql
type BomReleaseSource implements BomSource {
  bom: BomRelease
  quantity: Int!
}
```

### Fields

#### `bom` · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object

The source BOM release. Could be null if deleted or not accessible.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Quantity of the source (i.e., how many times the source is included into this BOM).
