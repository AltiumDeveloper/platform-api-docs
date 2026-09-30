---
title: "SupSolutionTemplatePatchEsdSourcePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-esd-source-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchEsdSourcePayload

Payload for patching the ESD source of a solution template.

### Returned By

[`supSolutionTemplatePatchEsdSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-esd-source.md) mutation

```graphql
type SupSolutionTemplatePatchEsdSourcePayload {
  errors: [SupSolutionTemplatePatchEsdSourceError!]
  success: Boolean
}
```

### Fields

#### `SupSolutionTemplatePatchEsdSourcePayload.errors` · [`[SupSolutionTemplatePatchEsdSourceError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-esd-source-error.md) list union supply

#### `SupSolutionTemplatePatchEsdSourcePayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
