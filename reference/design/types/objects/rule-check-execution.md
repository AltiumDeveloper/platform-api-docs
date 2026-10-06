---
title: "RuleCheckExecution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleCheckExecution

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the execution of rule checks against a design.

### Common Data Model

- [Rule Check Execution](https://altiumdeveloper.github.io/cdm/classes/des_RuleCheckExecution/) — Execution of a rule check against a project to validate design integrity and compliance with specified constraints.
  - GRID: `grid:workspace:{workspace-id}:design:rule-check-execution/{id}`

### Returned By

[`design.ruleCheckExecution.byDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-design-id.md) query · [`design.ruleCheckExecution.byId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-id.md) query · [`design.ruleCheckExecution.byIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-ids.md) query · [`design.ruleCheckExecution.byReleaseId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-release-id.md) query

### Member Of

[`DesignRuleCheckExecuteOnUploadPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-rule-check-execute-on-upload-payload.md) object · [`DesignRuleCheckExecutePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-rule-check-execute-payload.md) object · [`RuleCheckAggregateExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution.md) object

```graphql
type RuleCheckExecution {
  designId: ID
  finishedAt: DateTime
  id: ID!
  parts: [RuleCheckExecutionPart!]!
  reason: String!
  revisionId: String!
  source: String!
  startedAt: DateTime!
  startedByUserId: String!
  status: String!
  uploadId: String
  violations: [RuleViolation!]!
}
```

### Fields

#### `RuleCheckExecution.designId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The identifier of the design being checked.

#### `RuleCheckExecution.finishedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The time when the execution finished, if finished.

#### `RuleCheckExecution.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the rule check execution.

#### `RuleCheckExecution.parts` · [`[RuleCheckExecutionPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) non-null object design

The list of rule checks executed as part of this execution, with their definition at the time of execution and their current status.

#### `RuleCheckExecution.reason` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Reason why the rule check execution was triggered, which can be used for filtering and distinguishing different types of rule check executions. Known values: CHANGE, PROCESS, REGENERATION, RELEASE\_CANDIDATE, RELEASE, UPLOAD. New values may be added; clients must tolerate unknown values.

#### `RuleCheckExecution.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The design revision identifier associated with the execution.

#### `RuleCheckExecution.source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Source of the rule check execution, identifying whether it was triggered by a user or by the system. Known values: SYSTEM, USER. New values may be added; clients must tolerate unknown values.

#### `RuleCheckExecution.startedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The time when the execution started.

#### `RuleCheckExecution.startedByUserId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the user who started the execution.

#### `RuleCheckExecution.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The current status of the rule check execution. Known values: PENDING, RUNNING, COMPLETED, FAILED, SKIPPED. New values may be added; clients must tolerate unknown values.

#### `RuleCheckExecution.uploadId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Identifier of the upload, when the rule check execution targets a custom uploaded design.

#### `RuleCheckExecution.violations` · [`[RuleViolation!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation.md) non-null object design

The list of violations found during execution.
