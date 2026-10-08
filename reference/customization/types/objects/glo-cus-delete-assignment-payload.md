---
title: "GloCusDeleteAssignmentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-delete-assignment-payload"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusDeleteAssignmentPayload

Represents output value for assignment deletion.

### Returned By

[`gloCusDeleteAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-delete-assignment.md) mutation

```graphql
type GloCusDeleteAssignmentPayload {
  assignmentId: String!
}
```

### Fields

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the assignment.
