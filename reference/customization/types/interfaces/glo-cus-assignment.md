---
title: "GloCusAssignment"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment"
bounded_context: "Customization"
kind: "interfaces"
experimental: false
deprecated: false
---

# GloCusAssignment

### Member Of

[`GloCusAssignmentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-connection.md) object · [`GloCusAssignmentEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-edge.md) object

### Implemented By

[`GloCusDefaultAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-default-assignment.md) object · [`GloCusScriptAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-assignment.md) object · [`GloCusWorkflowAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-workflow-assignment.md) object

```graphql
interface GloCusAssignment {
  active: Boolean!
  assignmentId: String!
  configurationParameters: [GloCusAssignmentParameter!]!
  createdAt: DateTime!
  createdBy: String!
  description: String
  lastModifiedAt: DateTime!
  lastModifiedBy: String!
  name: String
  type: GloCusAssignmentType!
}
```

### Fields

#### `active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `configurationParameters` · [`[GloCusAssignmentParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-parameter.md) non-null object

Declared assignment configuration parameters.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `lastModifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `lastModifiedBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `type` · [`GloCusAssignmentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum
