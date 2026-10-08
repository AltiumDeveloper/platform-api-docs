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

- [Rule Check Execution](https://w3id.org/altium/cdm/design/RuleCheckExecution) — Execution of a rule check against a project to validate design integrity and compliance with specified constraints.

  - IRI: [`https://w3id.org/altium/cdm/design/RuleCheckExecution`](https://w3id.org/altium/cdm/design/RuleCheckExecution)
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

#### `designId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The identifier of the design being checked.

#### `finishedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The time when the execution finished, if finished.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the rule check execution.

#### `parts` · [`[RuleCheckExecutionPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) non-null object

The list of rule checks executed as part of this execution, with their definition at the time of execution and their current status.

#### `reason` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Reason why the rule check execution was triggered, which can be used for filtering and distinguishing different types of rule check executions. Known values: CHANGE, PROCESS, REGENERATION, RELEASE\_CANDIDATE, RELEASE, UPLOAD. New values may be added; clients must tolerate unknown values.

#### `revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design revision identifier associated with the execution.

#### `source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Source of the rule check execution, identifying whether it was triggered by a user or by the system. Known values: SYSTEM, USER. New values may be added; clients must tolerate unknown values.

#### `startedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The time when the execution started.

#### `startedByUserId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the user who started the execution.

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The current status of the rule check execution. Known values: PENDING, RUNNING, COMPLETED, FAILED, SKIPPED. New values may be added; clients must tolerate unknown values.

#### `uploadId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifier of the upload, when the rule check execution targets a custom uploaded design.

#### `violations` · [`[RuleViolation!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation.md) non-null object

The list of violations found during execution.
