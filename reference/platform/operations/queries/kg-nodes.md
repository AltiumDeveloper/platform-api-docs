---
title: "kgNodes"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/kg-nodes"
bounded_context: "Platform"
kind: "queries"
experimental: true
deprecated: false
---

# kgNodes

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

```graphql
kgNodes(
  type: KgNodeType!
): [KgNode!]!
```

### Arguments

#### `kgNodes.type` · [`KgNodeType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/kg-node-type.md) non-null enum platform

### Type

#### [`KgNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/kg-node.md) interface platform **EXPERIMENTAL**
