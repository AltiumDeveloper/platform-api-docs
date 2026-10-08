---
title: "SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-eval-kit-compatible-software-project-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput

Input for evaluation kit compatible software project update.

### Member Of

[`supSoftwareProjectUpdateEvalKitCompatibleSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-update-eval-kit-compatible-software-project.md) mutation

```graphql
input SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput {
  addCompatibleSoftwareProjectIds: [ID!]
  id: ID!
  removeCompatibleSoftwareProjectIds: [ID!]
}
```

### Fields

#### `addCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Add a new list of compatible software projects to evaluation kit.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `removeCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Remove a list of compatible software projects from evaluation kit.
