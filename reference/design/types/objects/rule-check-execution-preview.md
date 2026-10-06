---
title: "RuleCheckExecution_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleCheckExecution\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`design.preview.ruleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-execution.md) query · [`design.preview.ruleCheckExecutions`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-executions.md) query · [`design.preview.ruleCheckExecutionsByDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-executions-by-design-id.md) query · [`design.preview.ruleCheckExecutionsByReleaseId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-executions-by-release-id.md) query · [`design.preview.ruleCheckLatestExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-latest-execution.md) query

### Member Of

[`RuleCheckAggregateExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution-preview.md) object

```graphql
type RuleCheckExecution_Preview {
  designId: ID
  finishedAt: DateTime
  id: ID!
  parts: [RuleCheckExecutionPart!]!
  reason: String!
  revisionId: String!
  ruleChecks: [RuleCheckExecutionPart!] @deprecated
  source: String!
  startedAt: DateTime!
  startedByUserId: String!
  status: String!
  uploadId: String
  violations: [RuleViolation_Preview!]!
}
```

### Fields

#### `RuleCheckExecution_Preview.designId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `RuleCheckExecution_Preview.finishedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `RuleCheckExecution_Preview.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `RuleCheckExecution_Preview.parts` · [`[RuleCheckExecutionPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) non-null object design

#### `RuleCheckExecution_Preview.reason` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RuleCheckExecution_Preview.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RuleCheckExecution_Preview.source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RuleCheckExecution_Preview.startedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `RuleCheckExecution_Preview.startedByUserId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RuleCheckExecution_Preview.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RuleCheckExecution_Preview.uploadId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RuleCheckExecution_Preview.violations` · [`[RuleViolation_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-preview.md) non-null object design

#### Deprecated

#### `RuleCheckExecution_Preview.ruleChecks` · [`[RuleCheckExecutionPart!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) **DEPRECATED** list object design

> **Deprecated:** Use `parts` instead.

The list of rule checks executed as part of this execution, with their definition at the time of execution.
