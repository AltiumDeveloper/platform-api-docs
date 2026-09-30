---
title: "design.ruleCheck.byIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-ids"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheck.byIds

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves rule checks by their identifiers.

```graphql
design {
  ruleCheck {
    byIds(
      ids: [ID!]!
    ): [RuleCheck]!
  }
}
```

### Arguments

#### `byIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifiers of the rule checks.

### Type

#### [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) object design **EXPERIMENTAL**

Represents a rule check definition.
