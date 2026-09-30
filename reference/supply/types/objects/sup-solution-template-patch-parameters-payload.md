---
title: "SupSolutionTemplatePatchParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-parameters-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchParametersPayload

Payload for patching parameters on a solution template.

### Returned By

[`supSolutionTemplatePatchParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-parameters.md) mutation

```graphql
type SupSolutionTemplatePatchParametersPayload {
  errors: [SupSolutionTemplatePatchParametersError!]
  success: Boolean
}
```

### Fields

#### `SupSolutionTemplatePatchParametersPayload.errors` · [`[SupSolutionTemplatePatchParametersError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-parameters-error.md) list union supply

#### `SupSolutionTemplatePatchParametersPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
