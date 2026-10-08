---
title: "design.preview.ruleChecksByAuth"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-checks-by-auth"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleChecksByAuth

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheck.byAuth instead.

Retrieves all rule checks contained in the workspace.

```graphql
design {
  preview {
    ruleChecksByAuth: [RuleCheck!]! @deprecated
  }
}
```

### Type

#### [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) object **EXPERIMENTAL**

Represents a rule check definition.
