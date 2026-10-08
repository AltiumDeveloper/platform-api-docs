---
title: "design.preview.ruleCheckExecutionsByReleaseId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-executions-by-release-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.ruleCheckExecutionsByReleaseId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.ruleCheckExecution.byReleaseId instead.

Retrieves all rule check executions for a design's revision. Supports filtering on reason and source via the standard 'where' argument.

### Type

#### [`RuleCheckExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview.md) object **EXPERIMENTAL**

```graphql
design {
  preview {
    ruleCheckExecutionsByReleaseId(
      designId: ID!
      releaseId: ID!
      where: RuleCheckExecutionFilterInput
    ): [RuleCheckExecution_Preview!] @deprecated
  }
}
```

### Arguments

#### `designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.

#### `releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the release.

#### `where` · [`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input
