---
title: "design.preview.ruleCheckAggregateResultsByReleaseId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-aggregate-results-by-release-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleCheckAggregateResultsByReleaseId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheckExecution.byReleaseIdAggregated instead.

Retrieves the aggregated rule check results for a design.

```graphql
design {
  preview {
    ruleCheckAggregateResultsByReleaseId(
      designId: ID!
      releaseId: ID!
      where: RuleCheckExecutionFilterInput
    ): RuleCheckAggregateExecution_Preview @deprecated
  }
}
```

### Arguments

#### `ruleCheckAggregateResultsByReleaseId.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the design.

#### `ruleCheckAggregateResultsByReleaseId.releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the project release.

#### `ruleCheckAggregateResultsByReleaseId.where` · [`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input design

### Type

#### [`RuleCheckAggregateExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution-preview.md) object design **EXPERIMENTAL**
