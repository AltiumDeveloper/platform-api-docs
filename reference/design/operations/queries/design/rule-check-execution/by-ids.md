---
title: "design.ruleCheckExecution.byIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-ids"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheckExecution.byIds

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves multiple rule check executions by their identifiers.

### Type

#### [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) object **EXPERIMENTAL**

Represents the execution of rule checks against a design.

```graphql
design {
  ruleCheckExecution {
    byIds(
      ids: [ID!]!
    ): [RuleCheckExecution]!
  }
}
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifiers of the rule check executions.
