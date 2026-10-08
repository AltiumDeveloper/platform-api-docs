---
title: "GloCusAddAssignmentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-add-assignment-payload"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusAddAssignmentPayload

Represents output value for extension point assignment creation.

### Returned By

[`gloCusAddAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-add-assignment.md) mutation

```graphql
type GloCusAddAssignmentPayload {
  assignmentId: String!
}
```

### Fields

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the assignment.
