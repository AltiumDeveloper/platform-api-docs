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

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `gloCusLogs` · [`GloCusScriptExecutionLogPage!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-execution-log-page.md) non-null object

Retrieves a page of execution logs with a specified limit.

##### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `nextToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `scriptExecutionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `scriptExecutionResult` · [`GloCusScriptExecutionResult!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-execution-result.md) non-null object

#### `status` · [`GloCusScriptExecutionStatus!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-script-execution-status.md) non-null enum

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar
