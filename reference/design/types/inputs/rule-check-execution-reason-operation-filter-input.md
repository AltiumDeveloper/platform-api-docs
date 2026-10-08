---
title: "RuleCheckExecutionReasonOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-reason-operation-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: true
deprecated: false
---

# RuleCheckExecutionReasonOperationFilterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input

```graphql
input RuleCheckExecutionReasonOperationFilterInput {
  eq: String
  in: [String!]
  neq: String
  nin: [String!]
}
```

### Fields

#### `eq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `in` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

#### `neq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `nin` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar
