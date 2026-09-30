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

#### `DesWorkflowFilterInput.and` · [`[DesWorkflowFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) list input customization

#### `DesWorkflowFilterInput.assignee` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The account information for the owner of any action or response needed for this workflow.

#### `DesWorkflowFilterInput.createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

The `DateTime` for the creation of this workflow.

#### `DesWorkflowFilterInput.createdBy` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The account information for who created this workflow.

#### `DesWorkflowFilterInput.endedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

The `DateTime` for the completion of this workflow.

#### `DesWorkflowFilterInput.name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The label for this workflow.

#### `DesWorkflowFilterInput.or` · [`[DesWorkflowFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) list input customization

#### `DesWorkflowFilterInput.processDefinitionId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The reference identifier for definition of this workflow.

#### `DesWorkflowFilterInput.processDefinitionName` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The label for the definition of this workflow.

#### `DesWorkflowFilterInput.state` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The name of the active task(s) for this workflow.

#### `DesWorkflowFilterInput.status` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The current condition of this workflow.

#### `DesWorkflowFilterInput.workflowId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The reference identifier for this workflow.

#### `DesWorkflowFilterInput.workflowType` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The type of this workflow.
