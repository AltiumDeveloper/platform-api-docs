---
title: "GloScrScriptExecutionSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-execution-sort-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloScrScriptExecutionSortInput

Represents the execution of a script with status and result information.

### Member Of

[`gloScrScriptExecutionResults`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script-execution-results.md) query

```graphql
input GloScrScriptExecutionSortInput {
  createdAt: SortEnumType
  result: GloScrScriptExecutionResultSortInput
  scriptExecutionId: SortEnumType
  status: SortEnumType
  updatedAt: SortEnumType
}
```

### Fields

#### `createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `result` · [`GloScrScriptExecutionResultSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-execution-result-sort-input.md) input

#### `scriptExecutionId` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `status` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum
