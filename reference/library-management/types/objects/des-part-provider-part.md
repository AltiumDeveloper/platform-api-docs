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

#### `bestImage` · [`DesPartBestImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-best-image.md) object

The image for the part.

#### `category` · [`DesPartCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) object

The category details.

#### `documentCollections` · [`[DesPartDocumentCollection!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-document-collection.md) non-null object

The document collections.

#### `manufacturer` · [`DesPartCompany!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) non-null object

The manufacturer details.

#### `medianPrice1000` · [`DesPartPricePoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-price-point.md) object

The median price at quantity 1,000, discarding outliers. A reasonable estimate of average price for a part.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer part number.

#### `providerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier in the provider.

#### `sellers` · [`[DesPartSellerWithOffers!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-with-offers.md) non-null object

The sellers with offers.

#### `shortDescription` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

A short description of the part.

#### `specs` · [`[DesPartSpec!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-spec.md) non-null object

Attribute values for this part.

#### `totalAvail` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

Sum of stock available across all distributors.
