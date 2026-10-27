---
title: "BomOctopartSupplierReferenceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-octopart-supplier-reference-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomOctopartSupplierReferenceInput

A reference to a supplier in Octopart.

### Member Of

[`BomCreateBomSupplierReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-supplier-reference-input.md) input

```graphql
input BomOctopartSupplierReferenceInput {
  supplierId: String!
}
```

### Fields

#### `supplierId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the supplier in Octopart.
