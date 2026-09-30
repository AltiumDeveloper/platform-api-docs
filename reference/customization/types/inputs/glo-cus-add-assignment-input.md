---
title: "GloCusAddAssignmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-add-assignment-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusAddAssignmentInput

Represents input value for extension point assignment creation.

### Member Of

[`gloCusAddAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-add-assignment.md) mutation

```graphql
input GloCusAddAssignmentInput {
  configurationParameters: [GloCusAssignmentParameterInput!]!
  extensionPointId: String!
}
```

### Fields

#### `GloCusAddAssignmentInput.configurationParameters` · [`[GloCusAssignmentParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-parameter-input.md) non-null input customization

Values for extension point configuration.

#### `GloCusAddAssignmentInput.extensionPointId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the extension point.
