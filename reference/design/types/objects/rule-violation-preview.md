---
title: "RuleViolation_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleViolation\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RuleCheckAggregateExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution-preview.md) object · [`RuleCheckExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview.md) object

```graphql
type RuleViolation_Preview {
  boundingRectangle: RuleViolationRectangle
  documentId: String
  errorReportLevel: String!
  errorText: String!
  location: RuleViolationLocation
  relatedObjects: [RuleViolationRelatedObject!]!
  ruleCheck: RuleCheckExecutionPart!
  ruleDescription: String @deprecated
  ruleFailureCode: String
  ruleName: String! @deprecated
  ruleNameWithVariant: String! @deprecated
  ruleType: String! @deprecated
  variantId: String
  variantName: String
}
```

### Fields

#### `boundingRectangle` · [`RuleViolationRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-rectangle.md) object

#### `documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `errorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `errorText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `location` · [`RuleViolationLocation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-location.md) object

#### `relatedObjects` · [`[RuleViolationRelatedObject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-related-object.md) non-null object

#### `ruleCheck` · [`RuleCheckExecutionPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) non-null object

#### `ruleFailureCode` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### Deprecated

#### `ruleDescription` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use ruleCheck.description instead.

The description of the rule that was violated.

#### `ruleName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use ruleCheck.name instead.

The name of the rule that was violated.

#### `ruleNameWithVariant` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Compose the rule name with variant instead.

The name of the rule that was violated with variant if applicable.

#### `ruleType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use ruleCheck.type instead.

The type of the rule that was violated.
