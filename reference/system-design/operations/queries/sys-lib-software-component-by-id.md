---
title: "sysLibSoftwareComponentById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-lib-software-component-by-id"
bounded_context: "System Design"
kind: "queries"
experimental: true
deprecated: false
---

# sysLibSoftwareComponentById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves a software component

### Type

#### [`SysLibSoftwareComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-lib-software-component.md) object **EXPERIMENTAL**

```graphql
sysLibSoftwareComponentById(
  id: ID!
): SysLibSoftwareComponent
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
