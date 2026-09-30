---
title: "RuleCheckConfiguration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-configuration"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleCheckConfiguration

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents current rule check configuration.

### Returned By

[`design.preview.ruleCheckConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-configuration.md) query · [`design.ruleCheck.configuration`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/configuration.md) query

```graphql
type RuleCheckConfiguration {
  features: [String!]!
  staleStatusThreshold: String!
}
```

### Fields

#### `RuleCheckConfiguration.features` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Supported optional rule check features.

#### `RuleCheckConfiguration.staleStatusThreshold` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ISO 8601 representation of the maximum time a rule check should remain in unchanged, incomplete status. If this threshold is exceeded the caller should assume that the execution is stale and abandon monitoring.
