---
title: "SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-patch-software-project-solution-templates-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload

Payload returned after patching software projects on a solution template.

### Returned By

[`supSoftwareProjectPatchSoftwareProjectSolutionTemplates`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-patch-software-project-solution-templates.md) mutation

```graphql
type SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload {
  errors: [SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesError!]
  success: Boolean
}
```

### Fields

#### `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload.errors` · [`[SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-software-project-patch-software-project-solution-templates-error.md) list union supply

#### `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
