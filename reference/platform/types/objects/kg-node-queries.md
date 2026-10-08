---
title: "KgNodeQueries"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-node-queries"
bounded_context: "Platform"
kind: "objects"
experimental: true
deprecated: false
---

# KgNodeQueries

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`KgAnchorNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-anchor-node.md) object · [`KgNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/kg-node.md) interface

```graphql
type KgNodeQueries {
  usedBy: [KgNode!]!
  uses: [KgNode!]!
}
```

### Fields

#### `usedBy` · [`[KgNode!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/kg-node.md) non-null interface

#### `uses` · [`[KgNode!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/kg-node.md) non-null interface
