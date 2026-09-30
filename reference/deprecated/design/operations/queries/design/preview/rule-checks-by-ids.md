---
title: "design.preview.ruleChecksByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-checks-by-ids"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleChecksByIds

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheck.byIds instead.

Retrieves rule checks by their identifiers.

```graphql
design {
  preview {
    ruleChecksByIds(
      ids: [ID!]!
    ): [RuleCheck]! @deprecated
  }
}
```

### Arguments

#### `ruleChecksByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifiers of the rule checks.

### Type

#### [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) object design **EXPERIMENTAL**

Represents a rule check definition.
