---
title: "RuleViolationRelatedObject"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-related-object"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleViolationRelatedObject

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a design object related to a rule violation.

### Member Of

[`RuleViolation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-preview.md) object · [`RuleViolation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation.md) object

```graphql
type RuleViolationRelatedObject {
  boundingRectangle: RuleViolationRectangle
  designator: String!
  documentId: String!
  location: RuleViolationLocation
  name: String!
  type: String!
  uniqueId: String!
  variantId: String
  variantName: String
}
```

### Fields

#### `boundingRectangle` · [`RuleViolationRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-rectangle.md) object

The bounding rectangle of the related object.

#### `designator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The designator of the related object.

#### `documentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the document containing the related object.

#### `location` · [`RuleViolationLocation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-location.md) object

The location of the related object.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the related object.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the related object. Known values: DOCUMENT, PIN, NET, COMPONENT, PART, LINE, NET\_ITEM, VARIANT. New values may be added; clients must tolerate unknown values.

#### `uniqueId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The unique identifier of the related object.

#### `variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant identifier of the related object.

#### `variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant name of the related object.
