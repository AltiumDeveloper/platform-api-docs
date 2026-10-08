---
title: "KgAddNodePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-add-node-payload"
bounded_context: "Platform"
kind: "objects"
experimental: true
deprecated: false
---

# KgAddNodePayload

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`kgAddNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/kg-add-node.md) mutation

```graphql
type KgAddNodePayload {
  isAdded: Boolean!
}
```

### Fields

#### `isAdded` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether the entity was successfully registered.
