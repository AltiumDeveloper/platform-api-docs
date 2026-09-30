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

#### `DesPartSearchConnection.edges` · [`[DesPartSearchEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-edge.md) list object library-management

A list of edges.

#### `DesPartSearchConnection.nodes` · [`[DesPart!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) list object library-management

A flattened list of the nodes.

#### `DesPartSearchConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesPartSearchConnection.searchFacets` · [`DesPartSearchFacets!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-facets.md) non-null object library-management

Gets the search facets for the current result set.

#### `DesPartSearchConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
