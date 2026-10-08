---
title: "DesignRuleCheckExecutePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-rule-check-execute-payload"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignRuleCheckExecutePayload

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`designRuleCheckExecute`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/design-rule-check-execute.md) mutation

```graphql
type DesignRuleCheckExecutePayload {
  ruleCheckExecution: RuleCheckExecution!
  ruleCheckExecution_Preview: RuleCheckExecution! @deprecated
}
```

### Fields

#### `ruleCheckExecution` · [`RuleCheckExecution!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) non-null object

#### Deprecated

#### `ruleCheckExecution_Preview` · [`RuleCheckExecution!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) **DEPRECATED** non-null object

> **Deprecated:** Use 'ruleCheckExecution' instead.
