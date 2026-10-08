---
title: "KgRelation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-relation"
bounded_context: "Platform"
kind: "objects"
experimental: true
deprecated: false
---

# KgRelation

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`KgRelationQueries`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-relation-queries.md) object

```graphql
type KgRelation {
  object: KgNode
  semantic: KgRelationSemantic!
  subject: KgNode
}
```

### Fields

#### `object` · [`KgNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/kg-node.md) interface

#### `semantic` · [`KgRelationSemantic!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/kg-relation-semantic.md) non-null enum

#### `subject` · [`KgNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/kg-node.md) interface
