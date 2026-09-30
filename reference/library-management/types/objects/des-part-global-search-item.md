---
title: "DesPartGlobalSearchItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-item"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartGlobalSearchItem

Represents a global search item with links to supply part and platform part.

### Member Of

[`DesPartGlobalSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-connection.md) object · [`DesPartGlobalSearchEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-edge.md) object

```graphql
type DesPartGlobalSearchItem {
  globalPart: DesPartGlobalPart!
  part: DesPart
}
```

### Fields

#### `DesPartGlobalSearchItem.globalPart` · [`DesPartGlobalPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-part.md) non-null object library-management

The global part details.

#### `DesPartGlobalSearchItem.part` · [`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object library-management

The workspace part.
