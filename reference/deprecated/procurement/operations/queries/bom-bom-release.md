---
title: "bomBomRelease"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/queries/bom-bom-release"
bounded_context: "Procurement"
kind: "queries"
experimental: false
deprecated: true
---

# bomBomRelease

> **Deprecated:** Use bomBomById(id: "grid:...") instead.

Get the specified BOM release.

```graphql
bomBomRelease(
  bomId: String!
  releaseId: String!
): BomRelease! @deprecated
```

### Arguments

#### `bomBomRelease.bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the BOM.

#### `bomBomRelease.releaseId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the release.

### Type

#### [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object procurement

Represents a release of the BOM (i.e., a snapshot of a work-in-progress BOM).
