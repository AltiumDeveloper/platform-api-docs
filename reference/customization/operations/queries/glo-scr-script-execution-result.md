---
title: "gloScrScriptExecutionResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script-execution-result"
bounded_context: "Customization"
kind: "queries"
experimental: false
deprecated: false
---

# gloScrScriptExecutionResult

Retrieves the execution result of a script by its execution ID.

```graphql
gloScrScriptExecutionResult(
  scriptExecutionId: String!
): GloScrScriptExecution
```

### Arguments

#### `gloScrScriptExecutionResult.scriptExecutionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

### Type

#### [`GloScrScriptExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution.md) object customization

Represents the execution of a script with status and result information.
