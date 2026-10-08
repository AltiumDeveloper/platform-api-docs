---
title: "DesignRuleCheckExecuteOnUploadPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-rule-check-execute-on-upload-payload"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignRuleCheckExecuteOnUploadPayload

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`designRuleCheckExecuteOnUpload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/design-rule-check-execute-on-upload.md) mutation

```graphql
type DesignRuleCheckExecuteOnUploadPayload {
  ruleCheckExecution: RuleCheckExecution!
  ruleCheckExecution_Preview: RuleCheckExecution! @deprecated
}
```

### Fields

#### `ruleCheckExecution` · [`RuleCheckExecution!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) non-null object

#### Deprecated

#### `ruleCheckExecution_Preview` · [`RuleCheckExecution!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) **DEPRECATED** non-null object

> **Deprecated:** Use 'ruleCheckExecution' instead.
