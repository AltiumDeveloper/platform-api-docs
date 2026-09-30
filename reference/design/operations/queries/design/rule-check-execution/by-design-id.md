---
title: "design.ruleCheckExecution.byDesignId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-design-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheckExecution.byDesignId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves all rule check executions for a design's revision. Supports filtering on reason and source via the standard 'where' argument.

```graphql
design {
  ruleCheckExecution {
    byDesignId(
      designId: ID!
      revisionId: String!
      where: RuleCheckExecutionFilterInput
    ): [RuleCheckExecution!]!
  }
}
```

### Arguments

#### `byDesignId.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the design.

#### `byDesignId.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the project commit.

#### `byDesignId.where` · [`RuleCheckExecutionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/rule-check-execution-filter-input.md) input design

### Type

#### [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) object design **EXPERIMENTAL**

Represents the execution of rule checks against a design.
