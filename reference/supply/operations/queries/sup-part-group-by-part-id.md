---
title: "supPartGroupByPartId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-group-by-part-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supPartGroupByPartId

Get a part group by the ID of the part.

```graphql
supPartGroupByPartId(
  partId: ID!
): SupPartGroup!
```

### Arguments

#### `supPartGroupByPartId.partId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object supply

`SupPartGroup` contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.
