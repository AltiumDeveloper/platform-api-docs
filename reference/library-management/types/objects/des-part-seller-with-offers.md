---
title: "DesPartSellerWithOffers"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-with-offers"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSellerWithOffers

Represents a seller with offers.

### Member Of

[`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

```graphql
type DesPartSellerWithOffers {
  company: DesPartCompany!
  customPartSource: DesPartSource
  offers: [DesPartCompanyOffer!]!
}
```

### Fields

#### `company` · [`DesPartCompany!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) non-null object

The distributor.

#### `customPartSource` · [`DesPartSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-source.md) object

The custom part source.

#### `offers` · [`[DesPartCompanyOffer!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company-offer.md) non-null object

List of offers. Multiple offers may exist in different packaging.
