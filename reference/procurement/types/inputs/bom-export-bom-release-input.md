---
title: "BomExportBomReleaseInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-export-bom-release-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomExportBomReleaseInput

Input for exporting a BOM release.

### Member Of

[`bomExportBomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/mutations/bom-export-bom-release.md) mutation

```graphql
input BomExportBomReleaseInput {
  bomId: String!
  releaseId: String!
}
```

### Fields

#### `bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the BOM to export.

#### `releaseId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the release to export.
