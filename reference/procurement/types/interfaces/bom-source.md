---
title: "BomSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source"
bounded_context: "Procurement"
kind: "interfaces"
experimental: false
deprecated: false
---

# BomSource

Describes the source used to create the current BOM (e.g., a file, a design, or other BOM).

### Member Of

[`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

### Implemented By

[`BomDesignReleaseSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-design-release-source.md) object · [`BomDesignRevisionSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-design-revision-source.md) object · [`BomDesignSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-design-source.md) object · [`BomFileSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-file-source.md) object · [`BomProjectReleaseSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-project-release-source.md) object · [`BomReleaseSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release-source.md) object · [`BomSnapshotSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-snapshot-source.md) object

```graphql
interface BomSource {
  quantity: Int!
}
```

### Fields

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Quantity of the source (i.e., how many times the source is included into this BOM).
