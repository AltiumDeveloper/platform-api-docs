---
title: "GloCusUpdateWorkflowAssignmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-workflow-assignment-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusUpdateWorkflowAssignmentInput

Represents input value for updating with workflow assignment.

### Member Of

[`GloCusUpdateAssignmentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-input.md) input

```graphql
input GloCusUpdateWorkflowAssignmentInput {
  assignmentId: String!
  description: String
  name: String
  workflowId: String!
}
```

### Fields

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the assignment.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Description of the assignment.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the assignment.

#### `workflowId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Workflow Id.
