---
title: "BomOctopartOfferReference"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-octopart-offer-reference"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomOctopartOfferReference

A reference to an offer in Octopart.

### Implemented By

[`BomOfferReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-offer-reference.md) union

```graphql
type BomOctopartOfferReference {
  offerId: String!
}
```

### Fields

#### `BomOctopartOfferReference.offerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the offer in Octopart.
