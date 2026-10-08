---
title: "SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-set-software-project-solution-templates-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload

Payload returned after setting software projects on a solution template.

### Returned By

[`supSoftwareProjectSetSoftwareProjectSolutionTemplates`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-set-software-project-solution-templates.md) mutation

```graphql
type SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload {
  errors: [SupSoftwareProjectSetSoftwareProjectSolutionTemplatesError!]
  success: Boolean
}
```

### Fields

#### `errors` · [`[SupSoftwareProjectSetSoftwareProjectSolutionTemplatesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-software-project-set-software-project-solution-templates-error.md) list union

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.
