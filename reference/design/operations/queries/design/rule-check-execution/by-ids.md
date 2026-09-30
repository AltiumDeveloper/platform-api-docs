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

#### `byIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifiers of the rule check executions.

### Type

#### [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) object design **EXPERIMENTAL**

Represents the execution of rule checks against a design.
