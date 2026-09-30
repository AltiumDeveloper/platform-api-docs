---
title: "DesignDataCombinedErcCheckResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-combined-erc-check-result"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataCombinedErcCheckResult

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the result of a single ERC check.

### Member Of

[`DesignDataCombinedErcExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-combined-erc-execution.md) object

```graphql
type DesignDataCombinedErcCheckResult {
  customRuleCheck: RuleCheckExecutionPart
  name: String!
  origin: String!
  outcome: String
  ruleCheckType: String!
  violations: [RuleViolation!]!
}
```

### Fields

#### `DesignDataCombinedErcCheckResult.customRuleCheck` · [`RuleCheckExecutionPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) object design

The custom rule check, when the result originates from a custom check.

#### `DesignDataCombinedErcCheckResult.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the ERC check.

#### `DesignDataCombinedErcCheckResult.origin` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The source of the ERC check result. Known values: CUSTOM, DEFAULT. New values may be added; clients must tolerate unknown values.

#### `DesignDataCombinedErcCheckResult.outcome` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The outcome of the ERC check. Known values: PASSED, SKIPPED, WARNING, ERROR, FATAL. New values may be added; clients must tolerate unknown values.

#### `DesignDataCombinedErcCheckResult.ruleCheckType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The type of the ERC check.

#### `DesignDataCombinedErcCheckResult.violations` · [`[RuleViolation!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-violation.md) non-null object design

The violations reported by the ERC check.
