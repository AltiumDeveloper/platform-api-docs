---
title: "design.preview.ruleCheckLatestExecution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-latest-execution"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleCheckLatestExecution

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheckExecution.byDesignIdAggregated instead.

Retrieves the latest rule check execution for a WIP design.

```graphql
design {
  preview {
    ruleCheckLatestExecution(
      designId: ID!
      revisionId: String
    ): RuleCheckExecution_Preview @deprecated
  }
}
```

### Arguments

#### `ruleCheckLatestExecution.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the design.

#### `ruleCheckLatestExecution.revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the project commit.

### Type

#### [`RuleCheckExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview.md) object design **EXPERIMENTAL**
