---
title: "KgNode"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/kg-node"
bounded_context: "Platform"
kind: "interfaces"
experimental: true
deprecated: false
---

# KgNode

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`kgNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/kg-node.md) query · [`kgNodes`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/kg-nodes.md) query

### Member Of

[`KgNodeQueries`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-node-queries.md) object · [`KgRelation`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-relation.md) object

### Implemented By

[`KgAnchorNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-anchor-node.md) object

```graphql
interface KgNode {
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
