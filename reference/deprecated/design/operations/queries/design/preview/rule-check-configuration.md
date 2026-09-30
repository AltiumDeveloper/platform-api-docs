---
title: "design.preview.ruleCheckConfiguration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-configuration"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleCheckConfiguration

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheck.configuration instead.

Retrieves current rule check configuration.

```graphql
design {
  preview {
    ruleCheckConfiguration: RuleCheckConfiguration! @deprecated
  }
}
```

### Type

#### [`RuleCheckConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-configuration.md) object design **EXPERIMENTAL**

Represents current rule check configuration.
