---
title: "design.ruleCheck.byId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheck.byId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves a rule check by its identifier.

### Type

#### [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) object **EXPERIMENTAL**

Represents a rule check definition.

```graphql
design {
  ruleCheck {
    byId(
      id: ID!
    ): RuleCheck
  }
}
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the rule check.
