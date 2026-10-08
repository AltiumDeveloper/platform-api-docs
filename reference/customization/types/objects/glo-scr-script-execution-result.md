---
title: "GloScrScriptExecutionResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-result"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptExecutionResult

Represents the result of a script execution.

### Member Of

[`GloScrScriptExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution.md) object

```graphql
type GloScrScriptExecutionResult {
  exitCode: Int!
  returnValues: [GloScrScriptOutput!]
}
```

### Fields

#### `exitCode` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `returnValues` · [`[GloScrScriptOutput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-output.md) list object
