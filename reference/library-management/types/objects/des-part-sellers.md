---
title: "DesPartSellers"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-sellers"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSellers

Represents a collection of seller companies by provider.

### Returned By

[`desPartSellersByProvider`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-sellers-by-provider.md) query

```graphql
type DesPartSellers {
  customPart: [DesPartCompany!]
  siliconExpertPart: [DesPartCompany!]
  supplyPart: [DesPartCompany!]!
  z2DataPart: [DesPartCompany!]
}
```

### Fields

#### `DesPartSellers.customPart` · [`[DesPartCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) list object library-management

Seller companies from custom parts.

#### `DesPartSellers.siliconExpertPart` · [`[DesPartCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) list object library-management

Seller companies from \*SiliconExpert\* parts.

#### `DesPartSellers.supplyPart` · [`[DesPartCompany!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) non-null object library-management

Seller companies from supply parts.

#### `DesPartSellers.z2DataPart` · [`[DesPartCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company.md) list object library-management

Seller companies from \*Z2Data\* parts.
