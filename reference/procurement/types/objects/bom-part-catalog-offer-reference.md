---
title: "BomPartCatalogOfferReference"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-part-catalog-offer-reference"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomPartCatalogOfferReference

A reference to an offer in Part Catalog.

### Implemented By

[`BomOfferReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-offer-reference.md) union

```graphql
type BomPartCatalogOfferReference {
  manufacturer: String!
  mpn: String!
  sourceName: String!
  supplier: String!
  supplierPartNumber: String!
}
```

### Fields

#### `manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacturer of the part.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

MPN of the part.

#### `sourceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the source in Part Catalog.

#### `supplier` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Supplier name.

#### `supplierPartNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Supplier part number.
