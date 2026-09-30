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

#### `RuleViolationRelatedObject.boundingRectangle` · [`RuleViolationRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-rectangle.md) object design

The bounding rectangle of the related object.

#### `RuleViolationRelatedObject.designator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The designator of the related object.

#### `RuleViolationRelatedObject.documentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the document containing the related object.

#### `RuleViolationRelatedObject.location` · [`RuleViolationLocation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-location.md) object design

The location of the related object.

#### `RuleViolationRelatedObject.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the related object.

#### `RuleViolationRelatedObject.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The type of the related object. Known values: DOCUMENT, PIN, NET, COMPONENT, PART, LINE, NET\_ITEM, VARIANT. New values may be added; clients must tolerate unknown values.

#### `RuleViolationRelatedObject.uniqueId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The unique identifier of the related object.

#### `RuleViolationRelatedObject.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant identifier of the related object.

#### `RuleViolationRelatedObject.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant name of the related object.
