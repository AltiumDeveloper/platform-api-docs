---
title: "BomSettings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomSettings

Settings of the BOM.

### Member Of

[`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

```graphql
type BomSettings {
  country: BomCountry!
  currency: BomCurrency!
  production: BomProduction!
}
```

### Fields

#### `country` · [`BomCountry!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-country.md) non-null object

A country associated with the BOM. It is primarily used to provide region-specific information about parts.

#### `currency` · [`BomCurrency!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-currency.md) non-null object

A currency associated with the BOM. Prices in the BOM are provided in this currency.

#### `production` · [`BomProduction!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-production.md) non-null object

Production settings of the BOM.
