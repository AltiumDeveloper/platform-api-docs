---
title: "DesignRuleCheckExecutionConfigurationItemInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execution-configuration-item-input"
bounded_context: "Design"
kind: "inputs"
experimental: true
deprecated: false
---

# DesignRuleCheckExecutionConfigurationItemInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the rule check configuration for a specific rule check execution, allowing to override certain traits of the rule check execution.

### Member Of

[`DesignRuleCheckExecutionConfigurationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execution-configuration-input.md) input

```graphql
input DesignRuleCheckExecutionConfigurationItemInput {
  errorReportLevel: String!
  name: String
  ruleCheckId: ID!
}
```

### Fields

#### `DesignRuleCheckExecutionConfigurationItemInput.errorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The error level at which violations of this rule check should be reported for this execution. Known values: NO\_REPORT, WARNING, ERROR, FATAL. New values may be added; clients must tolerate unknown values.

#### `DesignRuleCheckExecutionConfigurationItemInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The display name of the rule check. Used to report a skipped violation when the rule check no longer exists on the server.

#### `DesignRuleCheckExecutionConfigurationItemInput.ruleCheckId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the rule check.
