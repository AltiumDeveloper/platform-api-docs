---
title: "SupSoftwareProjectParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-parameter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectParameterInput

A parameter and its values.

### Member Of

[`SupSoftwareProjectPatchParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-patch-parameters-input.md) input · [`SupSoftwareProjectSetParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-set-parameters-input.md) input

```graphql
input SupSoftwareProjectParameterInput {
  parameter: SupSoftwareProjectParameterInfoInput!
  values: [String!]!
}
```

### Fields

#### `SupSoftwareProjectParameterInput.parameter` · [`SupSoftwareProjectParameterInfoInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-parameter-info-input.md) non-null input supply

Identifies the parameter by its title (case-sensitive).

#### `SupSoftwareProjectParameterInput.values` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The values for this parameter.
