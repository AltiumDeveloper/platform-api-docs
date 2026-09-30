---
title: "GloScrScriptExecution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptExecution

Represents the execution of a script with status and result information.

### Common Data Model

- [Script Execution](https://altiumdeveloper.github.io/cdm/classes/cus_ScriptExecution/)
  - GRID: `grid:workspace:{workspace-id}:scripts:script-execution/{id}`

### Returned By

[`gloScrScriptExecutionResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script-execution-result.md) query

### Member Of

[`GloScrExecuteScriptPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-execute-script-payload.md) object · [`GloScrScriptExecutionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-connection.md) object · [`GloScrScriptExecutionEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-edge.md) object

```graphql
type GloScrScriptExecution {
  createdAt: DateTime!
  executionResult: GloScrScriptExecutionResult!
  failureReason: String
  logs(
    limit: Int! = 100
    nextToken: String
  ): GloScrScriptExecutionLogPage!
  scriptExecutionId: String!
  status: String!
  updatedAt: DateTime!
}
```

### Fields

#### `GloScrScriptExecution.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `GloScrScriptExecution.executionResult` · [`GloScrScriptExecutionResult!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-result.md) non-null object customization

#### `GloScrScriptExecution.failureReason` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloScrScriptExecution.logs` · [`GloScrScriptExecutionLogPage!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-log-page.md) non-null object customization

Retrieves a page of execution logs with a specified limit.

##### `GloScrScriptExecution.logs.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

##### `GloScrScriptExecution.logs.nextToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloScrScriptExecution.scriptExecutionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloScrScriptExecution.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloScrScriptExecution.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common
