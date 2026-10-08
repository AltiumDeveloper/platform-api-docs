---
title: "BomPartReference"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-part-reference"
bounded_context: "Procurement"
kind: "unions"
experimental: false
deprecated: false
---

# BomPartReference

A reference to a part.

### Member Of

[`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) object · [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface · [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) object

```graphql
union BomPartReference = BomOctopartPartReference | BomPartCatalogPartReference
```

### Possible types

#### [`BomOctopartPartReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-octopart-part-reference.md) object

A reference to a part in Octopart.

#### [`BomPartCatalogPartReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-part-catalog-part-reference.md) object

A reference to a part in Part Catalog.
