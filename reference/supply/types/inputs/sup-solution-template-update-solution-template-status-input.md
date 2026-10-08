---
title: "SupSolutionTemplateUpdateSolutionTemplateStatusInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-status-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateUpdateSolutionTemplateStatusInput

Input for solution template status update.

### Member Of

[`supSolutionTemplateUpdateSolutionTemplateStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-update-solution-template-status.md) mutation

```graphql
input SupSolutionTemplateUpdateSolutionTemplateStatusInput {
  id: ID!
  status: SupSolutionTemplateStatus!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Solution template id.

#### `status` · [`SupSolutionTemplateStatus!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) non-null enum

The status of a solution template to update.
