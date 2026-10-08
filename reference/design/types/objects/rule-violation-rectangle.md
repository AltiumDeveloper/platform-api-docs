---
title: "RuleViolationRectangle"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-rectangle"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleViolationRectangle

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents an axis-aligned bounding rectangle associated with a rule violation.

### Member Of

[`RuleViolation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-preview.md) object · [`RuleViolation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation.md) object · [`RuleViolationRelatedObject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-related-object.md) object

```graphql
type RuleViolationRectangle {
  bottom: Int!
  left: Int!
  right: Int!
  top: Int!
}
```

### Fields

#### `bottom` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The bottom edge coordinate.

#### `left` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The left edge coordinate.

#### `right` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The right edge coordinate.

#### `top` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The top edge coordinate.
