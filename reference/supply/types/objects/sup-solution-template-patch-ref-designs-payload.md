---
title: "SupSolutionTemplatePatchRefDesignsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-ref-designs-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchRefDesignsPayload

Payload for patching reference designs on a solution template.

### Returned By

[`supSolutionTemplatePatchRefDesigns`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-ref-designs.md) mutation

```graphql
type SupSolutionTemplatePatchRefDesignsPayload {
  errors: [SupSolutionTemplatePatchRefDesignsError!]
  success: Boolean
}
```

### Fields

#### `errors` · [`[SupSolutionTemplatePatchRefDesignsError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-ref-designs-error.md) list union

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.
