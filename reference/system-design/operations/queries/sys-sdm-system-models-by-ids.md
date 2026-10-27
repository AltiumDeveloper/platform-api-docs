---
title: "sysSdmSystemModelsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-system-models-by-ids"
bounded_context: "System Design"
kind: "queries"
experimental: true
deprecated: false
---

# sysSdmSystemModelsByIds

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves a list of system models

### Type

#### [`SysSdmSystemModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model.md) object **EXPERIMENTAL**

```graphql
sysSdmSystemModelsByIds(
  ids: [ID!]!
): [SysSdmSystemModel]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
