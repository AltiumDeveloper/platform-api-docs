---
title: "GloScrScriptExecutionLogPage"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-log-page"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptExecutionLogPage

Represents a page of execution logs.

### Member Of

[`GloScrScriptExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution.md) object

```graphql
type GloScrScriptExecutionLogPage {
  logs: [String!]!
  nextToken: String!
}
```

### Fields

#### `logs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `nextToken` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
