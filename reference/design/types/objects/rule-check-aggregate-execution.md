---
title: "RuleCheckAggregateExecution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleCheckAggregateExecution

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the aggregated result of one or more rule check executions for a design.

### Returned By

[`design.ruleCheckExecution.byDesignIdAggregated`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-design-id-aggregated.md) query · [`design.ruleCheckExecution.byReleaseIdAggregated`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-release-id-aggregated.md) query

```graphql
type RuleCheckAggregateExecution {
  designId: ID!
  executions: [RuleCheckExecution!]!
  parts: [RuleCheckExecutionPart!]!
  revisionId: String!
  status: String!
  violations: [RuleViolation!]!
}
```

### Fields

#### `RuleCheckAggregateExecution.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the design being checked.

#### `RuleCheckAggregateExecution.executions` · [`[RuleCheckExecution!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) non-null object design

The list of individual rule check executions that were aggregated to produce this result.

#### `RuleCheckAggregateExecution.parts` · [`[RuleCheckExecutionPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) non-null object design

The aggregated list of rule check execution parts across all executions, with their definition at the time of execution and their current status.

#### `RuleCheckAggregateExecution.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The design revision identifier associated with the aggregated executions.

#### `RuleCheckAggregateExecution.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The current aggregated status of the rule check executions. Known values: PENDING, RUNNING, COMPLETED, FAILED, SKIPPED. New values may be added; clients must tolerate unknown values.

#### `RuleCheckAggregateExecution.violations` · [`[RuleViolation!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation.md) non-null object design

The aggregated list of violations found across all executions.
