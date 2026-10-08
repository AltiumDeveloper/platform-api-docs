---
title: "design.ruleCheckExecution.byReleaseIdCombinedErc"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-release-id-combined-erc"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.ruleCheckExecution.byReleaseIdCombinedErc

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves combined custom and default ERC results for a design release.

```graphql
design {
  ruleCheckExecution {
    byReleaseIdCombinedErc(
      designId: ID!
      releaseId: ID!
    ): DesignDataCombinedErcExecution!
  }
}
```

### Arguments

#### `byReleaseIdCombinedErc.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the design.

#### `byReleaseIdCombinedErc.releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the release.

### Type

#### [`DesignDataCombinedErcExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-combined-erc-execution.md) object design **EXPERIMENTAL**

Represents the combined custom and default ERC results for a design revision.
