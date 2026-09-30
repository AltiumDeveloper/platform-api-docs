---
title: "desFootprintById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-footprint-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desFootprintById

Searches for a specific footprint by its unique identifier.

```graphql
desFootprintById(
  id: ID!
): DesFootprint
```

### Arguments

#### `desFootprintById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for a footprint.

### Type

#### [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object library-management

A component footprint. Footprints define the space a component occupies.
