---
title: "GloCusAssignmentExecution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-execution"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusAssignmentExecution

Dispatch result for a single assignment started by an extension point execution.

### Member Of

[`GloCusExecuteExtensionPointPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-execute-extension-point-payload.md) object

```graphql
type GloCusAssignmentExecution {
  assignmentId: String!
  assignmentType: GloCusAssignmentType!
  error: String
  executionId: String
}
```

### Fields

#### `assignmentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the assignment.

#### `assignmentType` · [`GloCusAssignmentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum

Type of the assignment.

#### `error` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Error message for this assignment. Null on successful dispatch.

#### `executionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifier of the started execution. Null on dispatch failure.
