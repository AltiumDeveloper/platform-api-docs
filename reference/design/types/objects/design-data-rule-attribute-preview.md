---
title: "DesignDataRuleAttribute_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rule-attribute-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataRuleAttribute\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents an attribute associated with a rule.

### Member Of

[`DesignDataRule_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rule-preview.md) object

```graphql
type DesignDataRuleAttribute_Preview {
  name: String!
  value: String
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the attribute.

#### `value` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The value of the attribute.
