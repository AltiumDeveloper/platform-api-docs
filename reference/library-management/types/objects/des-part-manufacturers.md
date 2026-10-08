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

#### `customPart` · [`[DesPartManufacturerCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company.md) list object

Manufacturer companies from custom parts.

#### `siliconExpertPart` · [`[DesPartManufacturerCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company.md) list object

Manufacturer companies from \*SiliconExpert\* parts.

#### `supplyPart` · [`[DesPartManufacturerCompany!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company.md) non-null object

Manufacturer companies from supply parts.

#### `z2DataPart` · [`[DesPartManufacturerCompany!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company.md) list object

Manufacturer companies from \*Z2Data\* parts.
