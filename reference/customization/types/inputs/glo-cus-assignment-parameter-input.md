---
title: "GloCusAssignmentParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-parameter-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusAssignmentParameterInput

Parameter for the assignment.

### Member Of

[`GloCusAddAssignmentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-add-assignment-input.md) input · [`GloCusUpdateAssignmentConfigurationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-configuration-input.md) input

```graphql
input GloCusAssignmentParameterInput {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the parameter.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Value of the parameter.
