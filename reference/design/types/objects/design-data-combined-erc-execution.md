---
title: "DesignDataCombinedErcExecution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-combined-erc-execution"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataCombinedErcExecution

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the combined custom and default ERC results for a design revision.

### Returned By

[`design.ruleCheckExecution.byDesignIdCombinedErc`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-design-id-combined-erc.md) query

```graphql
type DesignDataCombinedErcExecution {
  designId: ID!
  results: [DesignDataCombinedErcCheckResult!]!
  revisionId: String!
  status: String!
}
```

### Fields

#### `DesignDataCombinedErcExecution.designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the design associated with the ERC results.

#### `DesignDataCombinedErcExecution.results` · [`[DesignDataCombinedErcCheckResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-combined-erc-check-result.md) non-null object design

The combined ERC check results.

#### `DesignDataCombinedErcExecution.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The revision identifier associated with the ERC results.

#### `DesignDataCombinedErcExecution.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The current execution status of the combined ERC results. Known values: PENDING, RUNNING, COMPLETED, FAILED, SKIPPED. New values may be added; clients must tolerate unknown values.
