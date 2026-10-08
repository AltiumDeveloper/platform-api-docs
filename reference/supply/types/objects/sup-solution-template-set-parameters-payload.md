---
title: "SupSolutionTemplateSetParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-set-parameters-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetParametersPayload

Payload for replacing all parameters on a solution template.

### Returned By

[`supSolutionTemplateSetParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-parameters.md) mutation

```graphql
type SupSolutionTemplateSetParametersPayload {
  errors: [SupSolutionTemplateSetParametersError!]
  success: Boolean
}
```

### Fields

#### `errors` · [`[SupSolutionTemplateSetParametersError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-parameters-error.md) list union

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.
