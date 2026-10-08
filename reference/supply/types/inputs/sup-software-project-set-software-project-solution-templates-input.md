---
title: "SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-set-software-project-solution-templates-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput

Input for replacing all software project associations on a solution template.

### Member Of

[`supSoftwareProjectSetSoftwareProjectSolutionTemplates`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-set-software-project-solution-templates.md) mutation

```graphql
input SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput {
  softwareProjectIds: [ID!]
  solutionTemplateId: ID!
}
```

### Fields

#### `softwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

The complete new set of software project IDs. Removes all existing associations and inserts these.

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.
