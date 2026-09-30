---
title: "SupSolutionTemplateIndexSolutionTemplatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-index-solution-template-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateIndexSolutionTemplatePayload

Payload associated with indexing a solution template.

### Returned By

[`supSolutionTemplateIndexSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-index-solution-template.md) mutation

```graphql
type SupSolutionTemplateIndexSolutionTemplatePayload {
  errors: [SupSolutionTemplateIndexSolutionTemplateError!]
  success: Boolean
}
```

### Fields

#### `SupSolutionTemplateIndexSolutionTemplatePayload.errors` · [`[SupSolutionTemplateIndexSolutionTemplateError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-index-solution-template-error.md) list union supply

#### `SupSolutionTemplateIndexSolutionTemplatePayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Indicates whether the indexing operation was successful.
