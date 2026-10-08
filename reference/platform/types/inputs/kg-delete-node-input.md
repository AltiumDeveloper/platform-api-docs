---
title: "KgDeleteNodeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/kg-delete-node-input"
bounded_context: "Platform"
kind: "inputs"
experimental: true
deprecated: false
---

# KgDeleteNodeInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`kgDeleteNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/kg-delete-node.md) mutation

```graphql
input KgDeleteNodeInput {
  hardDelete: Boolean!
  id: ID!
}
```

### Fields

#### `hardDelete` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

When false, the entity is moved to the Vault recycle bin and can be restored; when true, it is permanently deleted.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The grid identifier of the entity to delete.
