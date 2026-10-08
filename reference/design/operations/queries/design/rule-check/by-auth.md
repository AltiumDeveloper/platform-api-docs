---
title: "design.ruleCheck.byAuth"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-auth"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheck.byAuth

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves all rule checks contained in the workspace.

```graphql
design {
  ruleCheck {
    byAuth: [RuleCheck!]!
  }
}
```

### Type

#### [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) object **EXPERIMENTAL**

Represents a rule check definition.
