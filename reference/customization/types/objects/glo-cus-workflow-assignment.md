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

#### [`GloCusAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment.md) interface

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

#### `active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `configurationParameters` · [`[GloCusAssignmentParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-parameter.md) non-null object

Declared assignment configuration parameters.

#### `configurationParams` · [`GloCusJsonArrayOfAssignmentConfigurationParameter!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-json-array-of-assignment-configuration-parameter.md) non-null object

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `lastModifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `lastModifiedBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `type` · [`GloCusAssignmentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum

#### `workflowId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
