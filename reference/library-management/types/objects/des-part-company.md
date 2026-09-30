---
title: "DesPartCompany"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCompany

Represents a company.

### Member Of

[`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object · [`DesPartSearchInferenceResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-result.md) object · [`DesPartSellers`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-sellers.md) object · [`DesPartSellerWithOffers`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-with-offers.md) object

```graphql
type DesPartCompany {
  companyId: String!
  name: String!
  slug: String
}
```

### Fields

#### `DesPartCompany.companyId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the company.

#### `DesPartCompany.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the company.

#### `DesPartCompany.slug` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Used for URLs like \*/manufacturers/aimtec\* or \*/distributors/digi-key\*.
