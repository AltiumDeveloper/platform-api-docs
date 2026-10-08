---
title: "design.preview.ruleCheckExecution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-execution"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleCheckExecution

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheckExecution.byId instead.

Retrieves a rule check execution by its identifier.

### Type

#### [`RuleCheckExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview.md) object **EXPERIMENTAL**

```graphql
design {
  preview {
    ruleCheckExecution(
      id: ID!
    ): RuleCheckExecution_Preview @deprecated
  }
}
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the rule check execution.
