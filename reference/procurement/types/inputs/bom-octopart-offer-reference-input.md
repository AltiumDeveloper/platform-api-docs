---
title: "BomOctopartOfferReferenceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-octopart-offer-reference-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomOctopartOfferReferenceInput

A reference to an offer in Octopart.

### Member Of

[`BomCreateBomOfferReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-offer-reference-input.md) input

```graphql
input BomOctopartOfferReferenceInput {
  offerId: String!
}
```

### Fields

#### `offerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the offer in Octopart.
