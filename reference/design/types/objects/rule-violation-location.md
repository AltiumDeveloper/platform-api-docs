---
title: "RuleViolationLocation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-location"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleViolationLocation

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a 2D coordinate location associated with a rule violation.

### Member Of

[`RuleViolation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-preview.md) object · [`RuleViolation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation.md) object · [`RuleViolationRelatedObject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-related-object.md) object

```graphql
type RuleViolationLocation {
  x: Int!
  y: Int!
}
```

### Fields

#### `x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The X coordinate.

#### `y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The Y coordinate.
