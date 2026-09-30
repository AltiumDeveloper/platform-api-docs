---
title: "design.preview.ruleCheckExecutions"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-executions"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleCheckExecutions

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheckExecution.byIds instead.

Retrieves multiple rule check executions by their identifiers.

```graphql
design {
  preview {
    ruleCheckExecutions(
      ids: [ID!]!
    ): [RuleCheckExecution_Preview] @deprecated
  }
}
```

### Arguments

#### `ruleCheckExecutions.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifiers of the rule check executions.

### Type

#### [`RuleCheckExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview.md) object design **EXPERIMENTAL**
