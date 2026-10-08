---
title: "BomCreateBomSupplierReferenceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-supplier-reference-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomSupplierReferenceInput

Describes a supplier used in a BOM. Only a single field must be specified.

### Member Of

[`BomCreateBomInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-input.md) input

```graphql
input BomCreateBomSupplierReferenceInput {
  octopart: BomOctopartSupplierReferenceInput
}
```

### Fields

#### `octopart` · [`BomOctopartSupplierReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-octopart-supplier-reference-input.md) input

A reference to a supplier in Octopart.
