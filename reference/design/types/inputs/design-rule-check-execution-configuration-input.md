---
title: "DesignRuleCheckExecutionConfigurationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execution-configuration-input"
bounded_context: "Design"
kind: "inputs"
experimental: true
deprecated: false
---

# DesignRuleCheckExecutionConfigurationInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the configuration of rule check execution, allowing to override certain traits of the rule check execution.

### Member Of

[`DesignRuleCheckExecuteInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execute-input.md) input · [`DesignRuleCheckExecuteOnUploadInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execute-on-upload-input.md) input

```graphql
input DesignRuleCheckExecutionConfigurationInput {
  ruleChecks: [DesignRuleCheckExecutionConfigurationItemInput!]
}
```

### Fields

#### `ruleChecks` · [`[DesignRuleCheckExecutionConfigurationItemInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execution-configuration-item-input.md) list input

The error report level overrides for specific rule checks, identified by their identifiers. When null, the design's default rule check configuration is used.
