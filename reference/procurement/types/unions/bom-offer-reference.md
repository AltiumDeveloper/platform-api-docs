---
title: "BomOfferReference"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-offer-reference"
bounded_context: "Procurement"
kind: "unions"
experimental: false
deprecated: false
---

# BomOfferReference

A reference to an offer.

### Member Of

[`BomSelectedElementOfferItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer-item.md) object

```graphql
union BomOfferReference = BomOctopartOfferReference | BomPartCatalogOfferReference
```

### Possible types

#### [`BomOctopartOfferReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-octopart-offer-reference.md) object

A reference to an offer in Octopart.

#### [`BomPartCatalogOfferReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-part-catalog-offer-reference.md) object

A reference to an offer in Part Catalog.
