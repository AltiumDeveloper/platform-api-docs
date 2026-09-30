---
title: "design.ruleCheckExecution.byReleaseId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-release-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheckExecution.byReleaseId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves all rule check executions for a design's revision. Supports filtering on reason and source via the standard 'where' argument.

```graphql
design {
  ruleCheckExecution {
    byReleaseId(
      designId: ID!
      releaseId: ID!
      where: RuleCheckExecutionFilterInput
    ): [RuleCheckExecution!]!
  }
}
```

### Arguments

#### `byReleaseId.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the design.

#### `byReleaseId.releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the release.

#### `byReleaseId.where` · [`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input design

### Type

#### [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) object design **EXPERIMENTAL**

Represents the execution of rule checks against a design.
