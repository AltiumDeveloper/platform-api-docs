---
title: "GloCusScriptAssignment"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-assignment"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusScriptAssignment

### Interfaces

#### [`GloCusAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment.md) interface customization

```graphql
type GloCusScriptAssignment implements GloCusAssignment {
  active: Boolean!
  assignmentId: String!
  configurationParameters: [GloCusAssignmentParameter!]!
  createdAt: DateTime!
  createdBy: String!
  description: String
  lastModifiedAt: DateTime!
  lastModifiedBy: String!
  name: String
  scriptFileToken: String
  scriptId: String!
  scriptVersionId: String!
  type: GloCusAssignmentType!
}
```

### Fields

#### `GloCusScriptAssignment.active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `GloCusScriptAssignment.assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusScriptAssignment.configurationParameters` · [`[GloCusAssignmentParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-parameter.md) non-null object customization

Declared assignment configuration parameters.

#### `GloCusScriptAssignment.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `GloCusScriptAssignment.createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusScriptAssignment.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusScriptAssignment.lastModifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `GloCusScriptAssignment.lastModifiedBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusScriptAssignment.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusScriptAssignment.scriptFileToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusScriptAssignment.scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusScriptAssignment.scriptVersionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusScriptAssignment.type` · [`GloCusAssignmentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum customization
