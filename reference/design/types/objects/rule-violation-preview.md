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

#### `RuleViolation_Preview.boundingRectangle` · [`RuleViolationRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-rectangle.md) object design

#### `RuleViolation_Preview.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RuleViolation_Preview.errorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RuleViolation_Preview.errorText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RuleViolation_Preview.location` · [`RuleViolationLocation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-location.md) object design

#### `RuleViolation_Preview.relatedObjects` · [`[RuleViolationRelatedObject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-related-object.md) non-null object design

#### `RuleViolation_Preview.ruleCheck` · [`RuleCheckExecutionPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) non-null object design

#### `RuleViolation_Preview.ruleFailureCode` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RuleViolation_Preview.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RuleViolation_Preview.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### Deprecated

#### `RuleViolation_Preview.ruleDescription` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use ruleCheck.description instead.

The description of the rule that was violated.

#### `RuleViolation_Preview.ruleName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use ruleCheck.name instead.

The name of the rule that was violated.

#### `RuleViolation_Preview.ruleNameWithVariant` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Compose the rule name with variant instead.

The name of the rule that was violated with variant if applicable.

#### `RuleViolation_Preview.ruleType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use ruleCheck.type instead.

The type of the rule that was violated.
