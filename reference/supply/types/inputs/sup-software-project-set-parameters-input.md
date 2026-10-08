---
title: "SupSoftwareProjectSetParametersInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-set-parameters-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetParametersInput

Input for replacing all parameters on a software project.

### Member Of

[`supSoftwareProjectSetParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-set-parameters.md) mutation

```graphql
input SupSoftwareProjectSetParametersInput {
  parameters: [SupSoftwareProjectParameterInput!]
  softwareProjectId: ID!
}
```

### Fields

#### `parameters` · [`[SupSoftwareProjectParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-parameter-input.md) list input

The complete new set of parameters. Deletes all existing parameters and values, then inserts these.

#### `softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the software project.
