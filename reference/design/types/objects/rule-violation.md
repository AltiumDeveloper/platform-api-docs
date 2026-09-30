---
title: "RuleViolation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleViolation

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a violation detected during a rule check execution.

### Member Of

[`DesignDataCombinedErcCheckResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-combined-erc-check-result.md) object · [`RuleCheckAggregateExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution.md) object · [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) object

```graphql
type RuleViolation {
  boundingRectangle: RuleViolationRectangle
  documentId: String
  errorReportLevel: String!
  errorText: String!
  location: RuleViolationLocation
  relatedObjects: [RuleViolationRelatedObject!]!
  ruleCheck: RuleCheckExecutionPart!
  ruleFailureCode: String
  variantId: String
  variantName: String
}
```

### Fields

#### `RuleViolation.boundingRectangle` · [`RuleViolationRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-rectangle.md) object design

The bounding rectangle of the violation in the design.

#### `RuleViolation.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the document where the violation occurred.

#### `RuleViolation.errorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The error level of this violation. Known values: SKIPPED, WARNING, ERROR, FATAL. New values may be added; clients must tolerate unknown values.

#### `RuleViolation.errorText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The error text describing the violation.

#### `RuleViolation.location` · [`RuleViolationLocation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-location.md) object design

The location of the violation in the design.

#### `RuleViolation.relatedObjects` · [`[RuleViolationRelatedObject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation-related-object.md) non-null object design

The design objects related to this violation.

#### `RuleViolation.ruleCheck` · [`RuleCheckExecutionPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) non-null object design

The information about the rule check at the time the violation was reported.

#### `RuleViolation.ruleFailureCode` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The failure code if the rule check itself failed, rather than detecting a violation. Known values: INTERNAL\_SERVER\_ERROR, UNHANDLED\_EXCEPTION\_FROM\_USER\_SCRIPT, INVALID\_RETURN\_VALUE\_FROM\_USER\_SCRIPT. New values may be added; clients must tolerate unknown values.

#### `RuleViolation.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant identifier for the violation.

#### `RuleViolation.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant name for the violation.
