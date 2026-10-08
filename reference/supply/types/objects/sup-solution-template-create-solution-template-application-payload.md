---
title: "SupSolutionTemplateCreateSolutionTemplateApplicationPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-create-solution-template-application-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateSolutionTemplateApplicationPayload

Payload associated with creating a solution template application.

### Returned By

[`supSolutionTemplateCreateSolutionTemplateApplication`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-create-solution-template-application.md) mutation

```graphql
type SupSolutionTemplateCreateSolutionTemplateApplicationPayload {
  errors: [SupSolutionTemplateCreateSolutionTemplateApplicationError!]
  id: ID
}
```

### Fields

#### `errors` · [`[SupSolutionTemplateCreateSolutionTemplateApplicationError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-create-solution-template-application-error.md) list union

#### `id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

Solution template application identifier.
