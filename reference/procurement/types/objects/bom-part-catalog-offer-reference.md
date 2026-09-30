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

#### `BomPartCatalogOfferReference.manufacturer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer of the part.

#### `BomPartCatalogOfferReference.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

MPN of the part.

#### `BomPartCatalogOfferReference.sourceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the source in Part Catalog.

#### `BomPartCatalogOfferReference.supplier` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Supplier name.

#### `BomPartCatalogOfferReference.supplierPartNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Supplier part number.
