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

### Type

#### [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

Represents a work-in-progress BOM (i.e., it is mutable and could change dynamically).

```graphql
bomBom(
  bomId: String!
): BomWip! @deprecated
```

### Arguments

#### `bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the BOM.
