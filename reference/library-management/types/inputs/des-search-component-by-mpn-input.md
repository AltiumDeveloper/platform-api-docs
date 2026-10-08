---
title: "DesSearchComponentByMpnInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-search-component-by-mpn-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesSearchComponentByMpnInput

Represents the input for searching components by manufacturer part numbers.

### Member Of

[`desSearchComponentsByMpns`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-search-components-by-mpns.md) query

```graphql
input DesSearchComponentByMpnInput {
  manufacturerName: String
  mpn: String!
}
```

### Fields

#### `manufacturerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The name of the manufacturer.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer part number.
