---
title: "BomCreateBomOfferReferenceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-offer-reference-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomOfferReferenceInput

Describes an offer selected for an element. Only a single field must be specified.

### Member Of

[`BomCreateBomItemElementInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-input.md) input

```graphql
input BomCreateBomOfferReferenceInput {
  octopart: BomOctopartOfferReferenceInput
}
```

### Fields

#### `octopart` · [`BomOctopartOfferReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-octopart-offer-reference-input.md) input

A reference to an offer in Octopart.
