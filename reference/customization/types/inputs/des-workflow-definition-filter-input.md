---
title: "DesWorkflowDefinitionFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkflowDefinitionFilterInput

A workflow definition contains a logical sequence of tasks.

### Member Of

[`DesWorkflowDefinitionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) input

```graphql
input DesWorkflowDefinitionFilterInput {
  and: [DesWorkflowDefinitionFilterInput!]
  createdAt: DateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  name: StringOperationFilterInput
  or: [DesWorkflowDefinitionFilterInput!]
  workflowDefinitionId: StringOperationFilterInput
  workflowType: StringOperationFilterInput
}
```

### Fields

#### `DesWorkflowDefinitionFilterInput.and` · [`[DesWorkflowDefinitionFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) list input customization

#### `DesWorkflowDefinitionFilterInput.createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

The `DateTime` for the creation of this workflow definition.

#### `DesWorkflowDefinitionFilterInput.createdBy` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The account information for who created this workflow definition.

#### `DesWorkflowDefinitionFilterInput.name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The label for this workflow definition.

#### `DesWorkflowDefinitionFilterInput.or` · [`[DesWorkflowDefinitionFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) list input customization

#### `DesWorkflowDefinitionFilterInput.workflowDefinitionId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The reference identifier for this workflow definition.

#### `DesWorkflowDefinitionFilterInput.workflowType` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The type of this workflow definition.
