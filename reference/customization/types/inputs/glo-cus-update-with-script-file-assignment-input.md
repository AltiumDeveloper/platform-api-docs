---
title: "GloCusUpdateWithScriptFileAssignmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-with-script-file-assignment-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusUpdateWithScriptFileAssignmentInput

Represents input value for updating with script file assignment.

### Member Of

[`GloCusUpdateAssignmentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-input.md) input

```graphql
input GloCusUpdateWithScriptFileAssignmentInput {
  assignmentId: String!
  description: String
  name: String
  scriptFileToken: String
}
```

### Fields

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the assignment.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Description of the assignment.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the assignment.

#### `scriptFileToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Script file token.
