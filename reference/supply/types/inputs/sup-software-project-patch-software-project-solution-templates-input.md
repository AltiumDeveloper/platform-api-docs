---
title: "SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-patch-software-project-solution-templates-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput

Input for patching software project associations on a solution template.

### Member Of

[`supSoftwareProjectPatchSoftwareProjectSolutionTemplates`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-patch-software-project-solution-templates.md) mutation

```graphql
input SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput {
  addSoftwareProjectIds: [ID!]
  removeSoftwareProjectIds: [ID!]
  solutionTemplateId: ID!
}
```

### Fields

#### `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput.addSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Software project IDs to associate with the solution template. Ignored if already associated.

#### `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput.removeSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Software project IDs to remove from the solution template.

#### `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the solution template.
