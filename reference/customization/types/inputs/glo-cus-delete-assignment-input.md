---
title: "GloCusDeleteAssignmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-delete-assignment-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusDeleteAssignmentInput

Represents input value for assignment deletion.

### Member Of

[`gloCusDeleteAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-delete-assignment.md) mutation

```graphql
input GloCusDeleteAssignmentInput {
  assignmentId: String!
}
```

### Fields

#### `GloCusDeleteAssignmentInput.assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the assignment.
