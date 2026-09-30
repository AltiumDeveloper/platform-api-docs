---
title: "SupSolutionTemplateSetCompatibleEvalKitsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-set-compatible-eval-kits-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetCompatibleEvalKitsPayload

Payload for replacing all compatible eval kits on a solution template.

### Returned By

[`supSolutionTemplateSetCompatibleEvalKits`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-compatible-eval-kits.md) mutation

```graphql
type SupSolutionTemplateSetCompatibleEvalKitsPayload {
  errors: [SupSolutionTemplateSetCompatibleEvalKitsError!]
  success: Boolean
}
```

### Fields

#### `SupSolutionTemplateSetCompatibleEvalKitsPayload.errors` · [`[SupSolutionTemplateSetCompatibleEvalKitsError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-compatible-eval-kits-error.md) list union supply

#### `SupSolutionTemplateSetCompatibleEvalKitsPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
