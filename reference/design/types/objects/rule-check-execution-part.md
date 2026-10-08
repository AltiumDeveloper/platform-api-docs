---
title: "RuleCheckExecutionPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleCheckExecutionPart

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the definition of a single rule check (one part of the execution) at the time of execution and it's current status.

### Member Of

[`DesignDataCombinedErcCheckResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-combined-erc-check-result.md) object · [`RuleCheckAggregateExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution-preview.md) object · [`RuleCheckAggregateExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution.md) object · [`RuleCheckExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview.md) object · [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) object · [`RuleViolation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-preview.md) object · [`RuleViolation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation.md) object

```graphql
type RuleCheckExecutionPart {
  actualErrorReportLevel: String!
  currentRule: RuleCheck
  defaultErrorReportLevel: String!
  description: String
  id: ID!
  name: String!
  status: String!
  type: String!
}
```

### Fields

#### `actualErrorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The error level at which this rule check was actually executed. Defaults to the rule check's default level when the actual level is not known (e.g. legacy records). Known values: NO\_REPORT, WARNING, ERROR, FATAL. New values may be added; clients must tolerate unknown values.

#### `currentRule` · [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) object

The rule check at its current state (potentially different from the past definition).

#### `defaultErrorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The default error level at which violations are reported. Known values: NO\_REPORT, WARNING, ERROR, FATAL. New values may be added; clients must tolerate unknown values.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The description of the rule check.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the rule check.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the rule check.

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The execution status of this rule check. Known values: PENDING, RUNNING, COMPLETED, FAILED. New values may be added; clients must tolerate unknown values.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the rule check. Known values: ERC, DRC. New values may be added; clients must tolerate unknown values.
