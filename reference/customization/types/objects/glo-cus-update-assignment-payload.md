---
title: "GloCusUpdateAssignmentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-update-assignment-payload"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusUpdateAssignmentPayload

Represents output value for updating extension point assignment.

### Returned By

[`gloCusUpdateAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-update-assignment.md) mutation

```graphql
type GloCusUpdateAssignmentPayload {
  assignmentId: String!
  type: GloCusAssignmentType!
}
```

### Fields

#### `GloCusUpdateAssignmentPayload.assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the assignment.

#### `GloCusUpdateAssignmentPayload.type` · [`GloCusAssignmentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum customization

Type of the assignment.
