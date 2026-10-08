---
title: "design.ruleCheckExecution.byDesignIdAggregated"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-design-id-aggregated"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheckExecution.byDesignIdAggregated

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves the aggregated rule check results for a design.

### Type

#### [`RuleCheckAggregateExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-aggregate-execution.md) object **EXPERIMENTAL**

Represents the aggregated result of one or more rule check executions for a design.

```graphql
design {
  ruleCheckExecution {
    byDesignIdAggregated(
      designId: ID!
      revisionId: String
      where: RuleCheckExecutionFilterInput
    ): RuleCheckAggregateExecution!
  }
}
```

### Arguments

#### `designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.

#### `revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the project commit.

#### `where` · [`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input
