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

### Type

#### [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object

A component footprint. Footprints define the space a component occupies.

```graphql
desFootprintById(
  id: ID!
): DesFootprint
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for a footprint.
