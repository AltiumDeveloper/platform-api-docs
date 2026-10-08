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

### Type

#### [`RuleCheckAggregateExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution-preview.md) object **EXPERIMENTAL**

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

#### `designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.

#### `releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the project release.

#### `where` · [`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input
