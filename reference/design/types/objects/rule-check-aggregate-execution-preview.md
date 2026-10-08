---
title: "RuleCheckAggregateExecution_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleCheckAggregateExecution\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`design.preview.ruleCheckAggregateResultsByDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-aggregate-results-by-design-id.md) query · [`design.preview.ruleCheckAggregateResultsByReleaseId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-aggregate-results-by-release-id.md) query

```graphql
type RuleCheckAggregateExecution_Preview {
  designId: ID!
  executions: [RuleCheckExecution_Preview!]!
  parts: [RuleCheckExecutionPart!]!
  revisionId: String!
  ruleChecks: [RuleCheckExecutionPart!] @deprecated
  status: String!
  violations: [RuleViolation_Preview!]!
}
```

### Fields

#### `RuleCheckAggregateExecution_Preview.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `RuleCheckAggregateExecution_Preview.executions` · [`[RuleCheckExecution_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview.md) non-null object

#### `RuleCheckAggregateExecution_Preview.parts` · [`[RuleCheckExecutionPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) non-null object

#### `RuleCheckAggregateExecution_Preview.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `RuleCheckAggregateExecution_Preview.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `RuleCheckAggregateExecution_Preview.violations` · [`[RuleViolation_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-preview.md) non-null object

#### Deprecated

#### `RuleCheckAggregateExecution_Preview.ruleChecks` · [`[RuleCheckExecutionPart!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) **DEPRECATED** list object

> **Deprecated:** Use `parts` instead.

The aggregated list of rule checks executed across all executions, with their definition at the time of execution.
