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

```graphql
bomBomById(
  id: ID!
): Bom!
```

### Arguments

#### `bomBomById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

ID of the BOM.

### Type

#### [`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface procurement

Represents a shared part of work-in-progress BOMs and releases of BOMs.
