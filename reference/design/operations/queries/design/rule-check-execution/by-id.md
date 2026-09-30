---
title: "design.ruleCheckExecution.byId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheckExecution.byId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves a rule check execution by its identifier.

```graphql
design {
  ruleCheckExecution {
    byId(
      id: ID!
    ): RuleCheckExecution
  }
}
```

### Arguments

#### `byId.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the rule check execution.

### Type

#### [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) object design **EXPERIMENTAL**

Represents the execution of rule checks against a design.
