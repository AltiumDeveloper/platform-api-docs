---
title: "SupSoftwareProjectSetParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-set-parameters-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetParametersPayload

Payload returned after setting parameters on a software project.

### Returned By

[`supSoftwareProjectSetParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-set-parameters.md) mutation

```graphql
type SupSoftwareProjectSetParametersPayload {
  errors: [SupSoftwareProjectSetParametersError!]
  success: Boolean
}
```

### Fields

#### `SupSoftwareProjectSetParametersPayload.errors` · [`[SupSoftwareProjectSetParametersError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-software-project-set-parameters-error.md) list union supply

#### `SupSoftwareProjectSetParametersPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
