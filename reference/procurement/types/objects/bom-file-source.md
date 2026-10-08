---
title: "BomFileSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-file-source"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomFileSource

Describes the source file used to create the current BOM.

### Interfaces

#### [`BomSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) interface

Describes the source used to create the current BOM (e.g., a file, a design, or other BOM).

```graphql
type BomFileSource implements BomSource {
  fileName: String!
  quantity: Int!
}
```

### Fields

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the original file.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Quantity of the source (i.e., how many times the source is included into this BOM).
