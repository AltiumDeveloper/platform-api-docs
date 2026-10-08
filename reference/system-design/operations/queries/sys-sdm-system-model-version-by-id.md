---
title: "sysSdmSystemModelVersionById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-system-model-version-by-id"
bounded_context: "System Design"
kind: "queries"
experimental: true
deprecated: false
---

# sysSdmSystemModelVersionById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves a system model version

### Type

#### [`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) object **EXPERIMENTAL**

```graphql
sysSdmSystemModelVersionById(
  id: ID!
): SysSdmSystemModelVersion!
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
