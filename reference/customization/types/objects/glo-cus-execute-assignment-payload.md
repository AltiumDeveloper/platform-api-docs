---
title: "GloCusExecuteAssignmentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-execute-assignment-payload"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusExecuteAssignmentPayload

Represents output value for assignment execution.

### Returned By

[`gloCusExecuteAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-execute-assignment.md) mutation

```graphql
type GloCusExecuteAssignmentPayload {
  assignmentType: GloCusAssignmentType!
  executionId: String!
  scriptExecutionId: String! @deprecated
}
```

### Fields

#### `GloCusExecuteAssignmentPayload.assignmentType` · [`GloCusAssignmentType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum customization

Type of the dispatched assignment.

#### `GloCusExecuteAssignmentPayload.executionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the started execution.

#### Deprecated

#### `GloCusExecuteAssignmentPayload.scriptExecutionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use executionId. For workflow assignments this returns Guid.Empty.

Identifier of the script execution. Guid.Empty for workflow assignments.
