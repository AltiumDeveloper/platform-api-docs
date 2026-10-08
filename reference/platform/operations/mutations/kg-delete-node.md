---
title: "kgDeleteNode"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/kg-delete-node"
bounded_context: "Platform"
kind: "mutations"
experimental: true
deprecated: false
---

# kgDeleteNode

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Deletes a Vault entity registered in the knowledge graph.

### Type

#### [`KgDeleteNodePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-delete-node-payload.md) object **EXPERIMENTAL**

```graphql
kgDeleteNode(
  input: KgDeleteNodeInput!
): KgDeleteNodePayload!
```

### Arguments

#### `input` · [`KgDeleteNodeInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/kg-delete-node-input.md) non-null input
