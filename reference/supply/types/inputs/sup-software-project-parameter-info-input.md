---
title: "SupSoftwareProjectParameterInfoInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-parameter-info-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectParameterInfoInput

Identifies a parameter by its title.

### Member Of

[`SupSoftwareProjectParameterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-parameter-input.md) input · [`SupSoftwareProjectPatchParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-patch-parameters-input.md) input

```graphql
input SupSoftwareProjectParameterInfoInput {
  title: String!
}
```

### Fields

#### `SupSoftwareProjectParameterInfoInput.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The title of the parameter (case-sensitive).
