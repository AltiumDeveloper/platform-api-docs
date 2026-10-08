---
title: "DesPartGlobalSearchConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-connection"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartGlobalSearchConnection

A connection to a list of items.

### Returned By

[`desPartGlobalSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-global-search.md) query

```graphql
type DesPartGlobalSearchConnection {
  edges: [DesPartGlobalSearchEdge!]
  nodes: [DesPartGlobalSearchItem!]
  pageInfo: PageInfo!
  searchFacets: DesPartGlobalSearchFacets!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[DesPartGlobalSearchEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-edge.md) list object

A list of edges.

#### `nodes` · [`[DesPartGlobalSearchItem!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-item.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `searchFacets` · [`DesPartGlobalSearchFacets!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-facets.md) non-null object

Gets the search facets for the current result set.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
