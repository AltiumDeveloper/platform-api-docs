---
title: "BomPartCatalogPartReference"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-part-catalog-part-reference"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomPartCatalogPartReference

A reference to a part in Part Catalog.

### Implemented By

[`BomPartReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-part-reference.md) union

```graphql
type BomPartCatalogPartReference {
  manufacturer: String!
  mpn: String!
  sourceName: String!
}
```

### Fields

#### `BomPartCatalogPartReference.manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer of the part.

#### `BomPartCatalogPartReference.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

MPN of the part.

#### `BomPartCatalogPartReference.sourceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the source in Part Catalog.
