---
title: "SupSoftwareProjectPatchParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-patch-parameters-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchParametersPayload

Payload returned after patching parameters on a software project.

### Returned By

[`supSoftwareProjectPatchParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-patch-parameters.md) mutation

```graphql
type SupSoftwareProjectPatchParametersPayload {
  errors: [SupSoftwareProjectPatchParametersError!]
  success: Boolean
}
```

### Fields

#### `errors` · [`[SupSoftwareProjectPatchParametersError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-software-project-patch-parameters-error.md) list union

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.
