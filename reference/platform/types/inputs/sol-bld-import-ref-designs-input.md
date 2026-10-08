---
title: "SolBldImportRefDesignsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-bld-import-ref-designs-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolBldImportRefDesignsInput

### Member Of

[`solBldImportRefDesigns`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-bld-import-ref-designs.md) mutation

```graphql
input SolBldImportRefDesignsInput {
  refDesignIds: [ID!]!
  solutionId: ID!
}
```

### Fields

#### `refDesignIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
