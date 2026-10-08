---
title: "GloCusExecuteAssignmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-execute-assignment-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusExecuteAssignmentInput

Represents input value for assignment execution.

### Member Of

[`gloCusExecuteAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-execute-assignment.md) mutation

```graphql
input GloCusExecuteAssignmentInput {
  assignmentId: String!
  parameters: [GloCusAssignmentExecutionParameterInput!]
}
```

### Fields

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the assignment.

#### `parameters` · [`[GloCusAssignmentExecutionParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-execution-parameter-input.md) list input

Represent parameters needed for execution.
