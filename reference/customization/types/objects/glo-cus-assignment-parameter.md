---
title: "GloCusAssignmentParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-parameter"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusAssignmentParameter

Parameter for the assignment.

### Member Of

[`GloCusAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment.md) interface · [`GloCusDefaultAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-default-assignment.md) object · [`GloCusScriptAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-assignment.md) object · [`GloCusWorkflowAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-workflow-assignment.md) object

```graphql
type GloCusAssignmentParameter {
  name: String!
  value: String!
}
```

### Fields

#### `GloCusAssignmentParameter.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the parameter.

#### `GloCusAssignmentParameter.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Value of the parameter.
