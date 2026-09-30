---
title: "SupSolutionTemplateCreateSolutionTemplatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-create-solution-template-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateSolutionTemplatePayload

Payload associated with creating a solution template.

### Returned By

[`supSolutionTemplateCreateSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-create-solution-template.md) mutation

```graphql
type SupSolutionTemplateCreateSolutionTemplatePayload {
  errors: [SupSolutionTemplateCreateSolutionTemplateError!]
  id: ID
}
```

### Fields

#### `SupSolutionTemplateCreateSolutionTemplatePayload.errors` · [`[SupSolutionTemplateCreateSolutionTemplateError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-create-solution-template-error.md) list union supply

#### `SupSolutionTemplateCreateSolutionTemplatePayload.id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

Solution template identifier.
