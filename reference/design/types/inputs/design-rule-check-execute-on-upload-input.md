---
title: "DesignRuleCheckExecuteOnUploadInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execute-on-upload-input"
bounded_context: "Design"
kind: "inputs"
experimental: true
deprecated: false
---

# DesignRuleCheckExecuteOnUploadInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the input for executing rule checks on an upload.

### Member Of

[`designRuleCheckExecuteOnUpload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/design-rule-check-execute-on-upload.md) mutation

```graphql
input DesignRuleCheckExecuteOnUploadInput {
  clientExecutionId: String
  configuration: DesignRuleCheckExecutionConfigurationInput
  idempotencyToken: String @deprecated
  reason: String!
  source: String!
  uploadId: String!
}
```

### Fields

#### `DesignRuleCheckExecuteOnUploadInput.clientExecutionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Client-generated identifier used together with the design and revision to deduplicate executions.

#### `DesignRuleCheckExecuteOnUploadInput.configuration` · [`DesignRuleCheckExecutionConfigurationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execution-configuration-input.md) input design

Custom configuration of the rule check reporting. When specified, overrides the configuration stored in the design data for this execution only.

#### `DesignRuleCheckExecuteOnUploadInput.reason` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Reason why the rule check execution is triggered, which can be used for filtering and distinguishing different types of rule check executions. Known values: CHANGE, PROCESS, REGENERATION, RELEASE\_CANDIDATE, RELEASE, UPLOAD. New values may be added; clients must tolerate unknown values.

#### `DesignRuleCheckExecuteOnUploadInput.source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Source of the rule check execution, identifying whether it is triggered by a user or by the system. Known values: SYSTEM, USER. New values may be added; clients must tolerate unknown values.

#### `DesignRuleCheckExecuteOnUploadInput.uploadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the upload to execute rule checks for.

#### Deprecated

#### `DesignRuleCheckExecuteOnUploadInput.idempotencyToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** idempotencyToken is obsolete. Use clientExecutionId instead.

Idempotency token used together with the design and revision to deduplicate executions.
