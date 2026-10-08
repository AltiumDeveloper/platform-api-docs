---
title: "design.ruleCheck.configuration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/configuration"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheck.configuration

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves current rule check configuration.

```graphql
design {
  ruleCheck {
    configuration: RuleCheckConfiguration!
  }
}
```

### Type

#### [`RuleCheckConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-configuration.md) object **EXPERIMENTAL**

Represents current rule check configuration.
