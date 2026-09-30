---
title: "BomExportBomReleaseInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-export-bom-release-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomExportBomReleaseInput

### Member Of

[`bomExportBomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/mutations/bom-export-bom-release.md) mutation

```graphql
input BomExportBomReleaseInput {
  bomId: String!
  releaseId: String!
}
```

### Fields

#### `BomExportBomReleaseInput.bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the BOM to export.

#### `BomExportBomReleaseInput.releaseId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the release to export.
