---
title: "RuleCheckExecutionSourceOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-source-operation-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: true
deprecated: false
---

# RuleCheckExecutionSourceOperationFilterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input

```graphql
input RuleCheckExecutionSourceOperationFilterInput {
  eq: String
  in: [String!]
  neq: String
  nin: [String!]
}
```

### Fields

#### `RuleCheckExecutionSourceOperationFilterInput.eq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RuleCheckExecutionSourceOperationFilterInput.in` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `RuleCheckExecutionSourceOperationFilterInput.neq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RuleCheckExecutionSourceOperationFilterInput.nin` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common
