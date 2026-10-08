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

### Type

#### [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) object **EXPERIMENTAL**

Represents the execution of rule checks against a design.

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

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the rule check execution.
