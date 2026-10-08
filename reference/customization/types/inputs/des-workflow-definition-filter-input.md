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

#### `and` · [`[DesWorkflowDefinitionFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) list input

#### `createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the creation of this workflow definition.

#### `createdBy` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The account information for who created this workflow definition.

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The label for this workflow definition.

#### `or` · [`[DesWorkflowDefinitionFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) list input

#### `workflowDefinitionId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The reference identifier for this workflow definition.

#### `workflowType` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The type of this workflow definition.
