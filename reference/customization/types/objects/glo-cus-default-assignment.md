---
title: "GloCusDefaultAssignment"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-default-assignment"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusDefaultAssignment

### Interfaces

#### [`GloCusAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment.md) interface customization

```graphql
type GloCusDefaultAssignment implements GloCusAssignment {
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
}
```

### Fields

#### `GloCusDefaultAssignment.active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `GloCusDefaultAssignment.assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusDefaultAssignment.configurationParameters` · [`[GloCusAssignmentParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-parameter.md) non-null object customization

Declared assignment configuration parameters.

#### `GloCusDefaultAssignment.configurationParams` · [`GloCusJsonArrayOfAssignmentConfigurationParameter!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-json-array-of-assignment-configuration-parameter.md) non-null object customization

#### `GloCusDefaultAssignment.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `GloCusDefaultAssignment.createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusDefaultAssignment.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusDefaultAssignment.lastModifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `GloCusDefaultAssignment.lastModifiedBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusDefaultAssignment.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusDefaultAssignment.type` · [`GloCusAssignmentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum customization
