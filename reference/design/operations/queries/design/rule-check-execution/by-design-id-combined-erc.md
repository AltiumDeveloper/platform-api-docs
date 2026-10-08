---
title: "design.ruleCheckExecution.byDesignIdCombinedErc"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-design-id-combined-erc"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheckExecution.byDesignIdCombinedErc

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves combined custom and default ERC results for a design.

### Type

#### [`DesignDataCombinedErcExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-combined-erc-execution.md) object **EXPERIMENTAL**

Represents the combined custom and default ERC results for a design revision.

```graphql
design {
  ruleCheckExecution {
    byDesignIdCombinedErc(
      designId: ID!
      revisionId: String
    ): DesignDataCombinedErcExecution!
  }
}
```

### Arguments

#### `designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.

#### `revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the project commit.
