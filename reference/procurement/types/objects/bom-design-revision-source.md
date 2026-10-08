---
title: "BomDesignRevisionSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-design-revision-source"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomDesignRevisionSource

Describes the source design revision used to create the current BOM.

### Interfaces

#### [`BomSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) interface

Describes the source used to create the current BOM (e.g., a file, a design, or other BOM).

```graphql
type BomDesignRevisionSource implements BomSource {
  designId: String!
  quantity: Int!
  sourceRevisionId: String!
  variantName: String
}
```

### Fields

#### `designId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the design.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Quantity of the source (i.e., how many times the source is included into this BOM).

#### `sourceRevisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the source revision used to create the BOM.

#### `variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the variant used to create the BOM.
