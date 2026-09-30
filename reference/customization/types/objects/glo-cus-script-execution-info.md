---
title: "GloCusScriptExecutionInfo"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-execution-info"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusScriptExecutionInfo

### Returned By

[`gloCusScriptExecutionInfo`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-cus-script-execution-info.md) query

```graphql
type GloCusScriptExecutionInfo {
  createdAt: DateTime!
  gloCusLogs(
    limit: Int! = 100
    nextToken: String
  ): GloCusScriptExecutionLogPage!
  scriptExecutionId: String!
  scriptExecutionResult: GloCusScriptExecutionResult!
  status: GloCusScriptExecutionStatus!
  updatedAt: DateTime!
}
```

### Fields

#### `GloCusScriptExecutionInfo.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `GloCusScriptExecutionInfo.gloCusLogs` · [`GloCusScriptExecutionLogPage!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-execution-log-page.md) non-null object customization

Retrieves a page of execution logs with a specified limit.

##### `GloCusScriptExecutionInfo.gloCusLogs.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

##### `GloCusScriptExecutionInfo.gloCusLogs.nextToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusScriptExecutionInfo.scriptExecutionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusScriptExecutionInfo.scriptExecutionResult` · [`GloCusScriptExecutionResult!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-execution-result.md) non-null object customization

#### `GloCusScriptExecutionInfo.status` · [`GloCusScriptExecutionStatus!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-script-execution-status.md) non-null enum customization

#### `GloCusScriptExecutionInfo.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common
