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

#### `manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacturer of the part.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

MPN of the part.

#### `sourceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the source in Part Catalog.
