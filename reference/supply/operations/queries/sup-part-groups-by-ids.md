---
title: "supPartGroupsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-groups-by-ids"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supPartGroupsByIds

Get a set of part groups by their unique identifiers (GRIDs). If an ID is not found it will be returned as null, ensuring a one to one mapping of input ids to output.

```graphql
supPartGroupsByIds(
  ids: [ID!]!
): [SupPartGroup]!
```

### Arguments

#### `supPartGroupsByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object supply

`SupPartGroup` contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.
