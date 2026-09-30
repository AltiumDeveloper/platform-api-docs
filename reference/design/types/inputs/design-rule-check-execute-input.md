---
title: "DesignRuleCheckExecuteInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execute-input"
bounded_context: "Design"
kind: "inputs"
experimental: true
deprecated: false
---

# DesignRuleCheckExecuteInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the input for executing rule checks on a design.

### Member Of

[`designRuleCheckExecute`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/design-rule-check-execute.md) mutation

```graphql
input DesignRuleCheckExecuteInput {
  clientExecutionId: String
  configuration: DesignRuleCheckExecutionConfigurationInput
  designId: ID!
  idempotencyToken: String @deprecated
  reason: String!
  revisionId: String
  source: String!
}
```

### Fields

#### `DesignRuleCheckExecuteInput.clientExecutionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Client-generated identifier used together with the design and revision to deduplicate executions.

#### `DesignRuleCheckExecuteInput.configuration` · [`DesignRuleCheckExecutionConfigurationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execution-configuration-input.md) input design

Custom configuration of the rule check reporting. When specified, overrides the configuration stored in the design data for this execution only.

#### `DesignRuleCheckExecuteInput.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the design to execute rule checks for.

#### `DesignRuleCheckExecuteInput.reason` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Reason why the rule check execution is triggered, which can be used for filtering and distinguishing different types of rule check executions. Known values: CHANGE, PROCESS, REGENERATION, RELEASE\_CANDIDATE, RELEASE, UPLOAD. New values may be added; clients must tolerate unknown values.

#### `DesignRuleCheckExecuteInput.revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the project commit. If not specified, the latest commit is used.

#### `DesignRuleCheckExecuteInput.source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Source of the rule check execution, identifying whether it is triggered by a user or by the system. Known values: SYSTEM, USER. New values may be added; clients must tolerate unknown values.

#### Deprecated

#### `DesignRuleCheckExecuteInput.idempotencyToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** idempotencyToken is obsolete. Use clientExecutionId instead.

Idempotency token used together with the design and revision to deduplicate executions.
