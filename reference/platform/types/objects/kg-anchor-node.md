---
title: "KgAnchorNode"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-anchor-node"
bounded_context: "Platform"
kind: "objects"
experimental: true
deprecated: false
---

# KgAnchorNode

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Interfaces

#### [`KgNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/kg-node.md) interface **EXPERIMENTAL**

```graphql
type KgAnchorNode implements KgNode {
  accessLevel: KgAccessLevel
  entityGuid: String
  id: ID!
  relatedNodes: KgNodeQueries!
  relations: KgRelationQueries!
}
```

### Fields

#### `accessLevel` · [`KgAccessLevel`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-access-level.md) object

#### `entityGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The unique identifier of the entity represented by this node.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `relatedNodes` · [`KgNodeQueries!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-node-queries.md) non-null object

#### `relations` · [`KgRelationQueries!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-relation-queries.md) non-null object
