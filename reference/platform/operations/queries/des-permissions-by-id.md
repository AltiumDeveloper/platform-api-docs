---
title: "desPermissionsById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-permissions-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: true
deprecated: false
---

# desPermissionsById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Gets all permissions by ID.

### Type

#### [`DesPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) interface

```graphql
desPermissionsById(
  id: ID!
): [DesPermission!]!
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
