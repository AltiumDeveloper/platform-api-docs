---
title: "KgDeleteNodePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-delete-node-payload"
bounded_context: "Platform"
kind: "objects"
experimental: true
deprecated: false
---

# KgDeleteNodePayload

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`kgDeleteNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/kg-delete-node.md) mutation

```graphql
type KgDeleteNodePayload {
  isDeleted: Boolean!
}
```

### Fields

#### `KgDeleteNodePayload.isDeleted` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether the entity was successfully deleted.
