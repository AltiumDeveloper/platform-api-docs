---
title: "BomExportBomInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-export-bom-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomExportBomInput

### Member Of

[`bomExportBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/mutations/bom-export-bom.md) mutation

```graphql
input BomExportBomInput {
  bomId: String!
}
```

### Fields

#### `bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the BOM to export.
