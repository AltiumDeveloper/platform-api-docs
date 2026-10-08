---
title: "SupSolutionTemplateSetRefDesignsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-set-ref-designs-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetRefDesignsPayload

Payload for replacing reference designs on a solution template.

### Returned By

[`supSolutionTemplateSetRefDesigns`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-ref-designs.md) mutation

```graphql
type SupSolutionTemplateSetRefDesignsPayload {
  errors: [SupSolutionTemplateSetRefDesignsError!]
  success: Boolean
}
```

### Fields

#### `SupSolutionTemplateSetRefDesignsPayload.errors` · [`[SupSolutionTemplateSetRefDesignsError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-ref-designs-error.md) list union supply

#### `SupSolutionTemplateSetRefDesignsPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
