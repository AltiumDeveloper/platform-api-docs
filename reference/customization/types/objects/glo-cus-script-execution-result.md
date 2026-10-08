---
title: "GloCusScriptExecutionResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-execution-result"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusScriptExecutionResult

### Member Of

[`GloCusScriptExecutionInfo`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-execution-info.md) object

```graphql
type GloCusScriptExecutionResult {
  exitCode: Int!
  returnValues: [GloCusScriptExecutionOutput!]
}
```

### Fields

#### `exitCode` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `returnValues` · [`[GloCusScriptExecutionOutput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-script-execution-output.md) list object
