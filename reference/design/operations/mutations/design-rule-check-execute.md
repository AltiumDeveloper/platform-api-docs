---
title: "designRuleCheckExecute"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/design-rule-check-execute"
bounded_context: "Design"
kind: "mutations"
experimental: true
deprecated: false
---

# designRuleCheckExecute

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Executes rule checks for the specified design and returns the resulting rule check execution.

```graphql
designRuleCheckExecute(
  input: DesignRuleCheckExecuteInput!
): DesignRuleCheckExecutePayload!
```

### Arguments

#### `designRuleCheckExecute.input` · [`DesignRuleCheckExecuteInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execute-input.md) non-null input design

### Type

#### [`DesignRuleCheckExecutePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-rule-check-execute-payload.md) object design **EXPERIMENTAL**
