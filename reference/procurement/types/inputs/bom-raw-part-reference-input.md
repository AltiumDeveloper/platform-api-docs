---
title: "BomRawPartReferenceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-raw-part-reference-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomRawPartReferenceInput

A raw part descriptor (MPN + Manufacturer).

### Member Of

[`BomCreateBomPartReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-part-reference-input.md) input

```graphql
input BomRawPartReferenceInput {
  manufacturer: String
  mpn: String
}
```

### Fields

#### `manufacturer` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Manufacturer name.

#### `mpn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

MPN stands for Manufacturer Part Number. It is a unique identifier issued by manufacturers that identifies individual products.
