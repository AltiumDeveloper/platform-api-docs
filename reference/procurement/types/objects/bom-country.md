---
title: "BomCountry"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-country"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomCountry

Information about a country.

### Member Of

[`BomSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings.md) object

```graphql
type BomCountry {
  code: String!
  name: String!
}
```

### Fields

#### `BomCountry.code` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ISO 3166-1 alpha-2 country code (e.g., 'US').

#### `BomCountry.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the country.
