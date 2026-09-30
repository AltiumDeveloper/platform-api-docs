---
title: "SupSolutionTemplatePatchCompatibleEvalKitsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-compatible-eval-kits-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchCompatibleEvalKitsPayload

Payload for patching compatible eval kits on a solution template.

### Returned By

[`supSolutionTemplatePatchCompatibleEvalKits`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-compatible-eval-kits.md) mutation

```graphql
type SupSolutionTemplatePatchCompatibleEvalKitsPayload {
  errors: [SupSolutionTemplatePatchCompatibleEvalKitsError!]
  success: Boolean
}
```

### Fields

#### `SupSolutionTemplatePatchCompatibleEvalKitsPayload.errors` · [`[SupSolutionTemplatePatchCompatibleEvalKitsError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-compatible-eval-kits-error.md) list union supply

#### `SupSolutionTemplatePatchCompatibleEvalKitsPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
