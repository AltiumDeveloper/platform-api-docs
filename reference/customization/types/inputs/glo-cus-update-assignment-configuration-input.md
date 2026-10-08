---
title: "GloCusUpdateAssignmentConfigurationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-configuration-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusUpdateAssignmentConfigurationInput

Represents input value for updating assignment configuration.

### Member Of

[`GloCusUpdateAssignmentConfigurationsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-configurations-input.md) input

```graphql
input GloCusUpdateAssignmentConfigurationInput {
  assignmentId: String!
  configurationParameters: [GloCusAssignmentParameterInput!]!
}
```

### Fields

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the extension point.

#### `configurationParameters` · [`[GloCusAssignmentParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-parameter-input.md) non-null input

Extension point configuration parameters.
