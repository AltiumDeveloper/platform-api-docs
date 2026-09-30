---
title: "DesPartManufacturers"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturers"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartManufacturers

Represents a collection of manufacturer companies by provider.

### Returned By

[`desPartManufacturersByProvider`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-manufacturers-by-provider.md) query

```graphql
type DesPartManufacturers {
  customPart: [DesPartManufacturerCompany!]
  siliconExpertPart: [DesPartManufacturerCompany!]
  supplyPart: [DesPartManufacturerCompany!]!
  z2DataPart: [DesPartManufacturerCompany!]
}
```

### Fields

#### `DesPartManufacturers.customPart` · [`[DesPartManufacturerCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company.md) list object library-management

Manufacturer companies from custom parts.

#### `DesPartManufacturers.siliconExpertPart` · [`[DesPartManufacturerCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company.md) list object library-management

Manufacturer companies from \*SiliconExpert\* parts.

#### `DesPartManufacturers.supplyPart` · [`[DesPartManufacturerCompany!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company.md) non-null object library-management

Manufacturer companies from supply parts.

#### `DesPartManufacturers.z2DataPart` · [`[DesPartManufacturerCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company.md) list object library-management

Manufacturer companies from \*Z2Data\* parts.
