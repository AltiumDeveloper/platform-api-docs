---
title: "design.preview.ruleCheckById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-by-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleCheckById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheck.byId instead.

Retrieves a rule check by its identifier.

### Type

#### [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) object **EXPERIMENTAL**

Represents a rule check definition.

```graphql
design {
  preview {
    ruleCheckById(
      id: ID!
    ): RuleCheck @deprecated
  }
}
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the rule check.
