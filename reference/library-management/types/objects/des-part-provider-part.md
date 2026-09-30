---
title: "DesPartProviderPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartProviderPart

Represents a provider part.

### Member Of

[`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object · [`DesPartGlobalPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-part.md) object

```graphql
type DesPartProviderPart {
  bestImage: DesPartBestImage
  category: DesPartCategory
  documentCollections: [DesPartDocumentCollection!]!
  manufacturer: DesPartCompany!
  medianPrice1000: DesPartPricePoint
  mpn: String!
  providerId: String!
  sellers: [DesPartSellerWithOffers!]!
  shortDescription: String
  specs: [DesPartSpec!]!
  totalAvail: Long!
}
```

### Fields

#### `DesPartProviderPart.bestImage` · [`DesPartBestImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-best-image.md) object library-management

The image for the part.

#### `DesPartProviderPart.category` · [`DesPartCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) object library-management

The category details.

#### `DesPartProviderPart.documentCollections` · [`[DesPartDocumentCollection!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document-collection.md) non-null object library-management

The document collections.

#### `DesPartProviderPart.manufacturer` · [`DesPartCompany!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) non-null object library-management

The manufacturer details.

#### `DesPartProviderPart.medianPrice1000` · [`DesPartPricePoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-price-point.md) object library-management

The median price at quantity 1,000, discarding outliers. A reasonable estimate of average price for a part.

#### `DesPartProviderPart.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer part number.

#### `DesPartProviderPart.providerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier in the provider.

#### `DesPartProviderPart.sellers` · [`[DesPartSellerWithOffers!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-with-offers.md) non-null object library-management

The sellers with offers.

#### `DesPartProviderPart.shortDescription` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

A short description of the part.

#### `DesPartProviderPart.specs` · [`[DesPartSpec!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-spec.md) non-null object library-management

Attribute values for this part.

#### `DesPartProviderPart.totalAvail` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

Sum of stock available across all distributors.
