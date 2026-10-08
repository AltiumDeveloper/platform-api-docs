---
title: "bomBomById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/queries/bom-bom-by-id"
bounded_context: "Procurement"
kind: "queries"
experimental: false
deprecated: false
---

# bomBomById

Get the specified BOM.

### Type

#### [`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface

Represents a shared part of work-in-progress BOMs and releases of BOMs.

```graphql
bomBomById(
  id: ID!
): Bom!
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

ID of the BOM.
