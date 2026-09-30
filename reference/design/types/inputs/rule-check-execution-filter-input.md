---
title: "RuleCheckExecutionFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: true
deprecated: false
---

# RuleCheckExecutionFilterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the execution of rule checks against a design.

### Member Of

[`design.preview.ruleCheckAggregateResultsByDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-aggregate-results-by-design-id.md) query · [`design.preview.ruleCheckAggregateResultsByReleaseId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-aggregate-results-by-release-id.md) query · [`design.preview.ruleCheckExecutionsByDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-executions-by-design-id.md) query · [`design.preview.ruleCheckExecutionsByReleaseId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-executions-by-release-id.md) query · [`design.ruleCheckExecution.byDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-design-id.md) query · [`design.ruleCheckExecution.byDesignIdAggregated`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-design-id-aggregated.md) query · [`design.ruleCheckExecution.byReleaseId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-release-id.md) query · [`design.ruleCheckExecution.byReleaseIdAggregated`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-release-id-aggregated.md) query · [`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input

```graphql
input RuleCheckExecutionFilterInput {
  and: [RuleCheckExecutionFilterInput!]
  or: [RuleCheckExecutionFilterInput!]
  reason: RuleCheckExecutionReasonOperationFilterInput
  source: RuleCheckExecutionSourceOperationFilterInput
}
```

### Fields

#### `RuleCheckExecutionFilterInput.and` · [`[RuleCheckExecutionFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) list input design

#### `RuleCheckExecutionFilterInput.or` · [`[RuleCheckExecutionFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) list input design

#### `RuleCheckExecutionFilterInput.reason` · [`RuleCheckExecutionReasonOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-reason-operation-filter-input.md) input design

Reason why the rule check execution was triggered, which can be used for filtering and distinguishing different types of rule check executions.

#### `RuleCheckExecutionFilterInput.source` · [`RuleCheckExecutionSourceOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-source-operation-filter-input.md) input design

Source of the rule check execution, identifying whether it was triggered by a user or by the system.
