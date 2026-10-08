---
title: "DesWorkflowFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkflowFilterInput

A workflow manages the execution of a logical sequence of tasks.

### Member Of

[`DesWorkflowFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) input

```graphql
input DesWorkflowFilterInput {
  and: [DesWorkflowFilterInput!]
  assignee: StringOperationFilterInput
  createdAt: DateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  endedAt: DateTimeOperationFilterInput
  name: StringOperationFilterInput
  or: [DesWorkflowFilterInput!]
  processDefinitionId: StringOperationFilterInput
  processDefinitionName: StringOperationFilterInput
  state: StringOperationFilterInput
  status: StringOperationFilterInput
  workflowId: StringOperationFilterInput
  workflowType: StringOperationFilterInput
}
```

### Fields

#### `and` · [`[DesWorkflowFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) list input

#### `assignee` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The account information for the owner of any action or response needed for this workflow.

#### `createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the creation of this workflow.

#### `createdBy` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The account information for who created this workflow.

#### `endedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the completion of this workflow.

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The label for this workflow.

#### `or` · [`[DesWorkflowFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) list input

#### `processDefinitionId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The reference identifier for definition of this workflow.

#### `processDefinitionName` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The label for the definition of this workflow.

#### `state` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The name of the active task(s) for this workflow.

#### `status` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The current condition of this workflow.

#### `workflowId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The reference identifier for this workflow.

#### `workflowType` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The type of this workflow.
