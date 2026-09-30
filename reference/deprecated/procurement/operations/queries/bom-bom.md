---
title: "bomBom"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/queries/bom-bom"
bounded_context: "Procurement"
kind: "queries"
experimental: false
deprecated: true
---

# bomBom

> **Deprecated:** Use bomBomById(id: "grid:...") instead.

Get the specified BOM.

```graphql
bomBom(
  bomId: String!
): BomWip! @deprecated
```

### Arguments

#### `bomBom.bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the BOM.

### Type

#### [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object procurement

Represents a work-in-progress BOM (i.e., it is mutable and could change dynamically).
