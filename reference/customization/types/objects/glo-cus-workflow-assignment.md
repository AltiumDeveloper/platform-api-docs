---
title: "GloCusWorkflowAssignment"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-workflow-assignment"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusWorkflowAssignment

### Interfaces

#### [`GloCusAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment.md) interface customization

```graphql
type GloCusWorkflowAssignment implements GloCusAssignment {
  active: Boolean!
  assignmentId: String!
  configurationParameters: [GloCusAssignmentParameter!]!
  configurationParams: GloCusJsonArrayOfAssignmentConfigurationParameter!
  createdAt: DateTime!
  createdBy: String!
  description: String
  lastModifiedAt: DateTime!
  lastModifiedBy: String!
  name: String
  type: GloCusAssignmentType!
  workflowId: String!
}
```

### Fields

#### `GloCusWorkflowAssignment.active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `GloCusWorkflowAssignment.assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusWorkflowAssignment.configurationParameters` · [`[GloCusAssignmentParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-parameter.md) non-null object customization

Declared assignment configuration parameters.

#### `GloCusWorkflowAssignment.configurationParams` · [`GloCusJsonArrayOfAssignmentConfigurationParameter!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-json-array-of-assignment-configuration-parameter.md) non-null object customization

#### `GloCusWorkflowAssignment.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `GloCusWorkflowAssignment.createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusWorkflowAssignment.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusWorkflowAssignment.lastModifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `GloCusWorkflowAssignment.lastModifiedBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusWorkflowAssignment.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusWorkflowAssignment.type` · [`GloCusAssignmentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum customization

#### `GloCusWorkflowAssignment.workflowId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
