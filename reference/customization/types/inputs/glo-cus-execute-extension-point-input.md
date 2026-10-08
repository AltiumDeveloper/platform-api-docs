---
title: "GloCusExecuteExtensionPointInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-execute-extension-point-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusExecuteExtensionPointInput

Represents input value for extension point execution.

### Member Of

[`gloCusExecuteExtensionPoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-execute-extension-point.md) mutation

```graphql
input GloCusExecuteExtensionPointInput {
  extensionPointId: String!
  parameters: [GloCusAssignmentExecutionParameterInput!]
}
```

### Fields

#### `extensionPointId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the extension point.

#### `parameters` · [`[GloCusAssignmentExecutionParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-execution-parameter-input.md) list input

Parameters passed to every dispatched assignment.
