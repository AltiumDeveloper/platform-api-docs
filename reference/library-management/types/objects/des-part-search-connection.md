---
title: "DesPartSearchConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchConnection

A connection to a list of items.

### Returned By

[`desPartSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search.md) query

```graphql
type DesPartSearchConnection {
  edges: [DesPartSearchEdge!]
  nodes: [DesPart!]
  pageInfo: PageInfo!
  searchFacets: DesPartSearchFacets!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[DesPartSearchEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-edge.md) list object

A list of edges.

#### `nodes` · [`[DesPart!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `searchFacets` · [`DesPartSearchFacets!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facets.md) non-null object

Gets the search facets for the current result set.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
