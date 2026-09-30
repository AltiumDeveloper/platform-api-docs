---
title: "supPartGroupById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-group-by-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supPartGroupById

Get a specific part group by its unique identifier (GRID).

```graphql
supPartGroupById(
  id: ID!
): SupPartGroup!
```

### Arguments

#### `supPartGroupById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object supply

`SupPartGroup` contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.
