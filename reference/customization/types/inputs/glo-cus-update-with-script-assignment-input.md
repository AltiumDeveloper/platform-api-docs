---
title: "GloCusUpdateWithScriptAssignmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-with-script-assignment-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusUpdateWithScriptAssignmentInput

Represents input value for updating with script assignment.

### Member Of

[`GloCusUpdateAssignmentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-input.md) input

```graphql
input GloCusUpdateWithScriptAssignmentInput {
  assignmentId: String!
  description: String
  name: String
  scriptId: String!
  scriptVersionId: String!
}
```

### Fields

#### `GloCusUpdateWithScriptAssignmentInput.assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the assignment.

#### `GloCusUpdateWithScriptAssignmentInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Description of the assignment.

#### `GloCusUpdateWithScriptAssignmentInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of the assignment.

#### `GloCusUpdateWithScriptAssignmentInput.scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Script Id.

#### `GloCusUpdateWithScriptAssignmentInput.scriptVersionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Script Version Id.
