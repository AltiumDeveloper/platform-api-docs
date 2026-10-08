---
title: "SupSolutionTemplatePatchRefDesignsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-ref-designs-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchRefDesignsInput

Input for adding or removing individual reference designs on a solution template.

### Member Of

[`supSolutionTemplatePatchRefDesigns`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-ref-designs.md) mutation

```graphql
input SupSolutionTemplatePatchRefDesignsInput {
  addRefDesignIds: [ID!]
  removeRefDesignIds: [ID!]
  solutionTemplateId: ID!
}
```

### Fields

#### `addRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

The identifier(s) of the reference designs to add.

#### `removeRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

The identifier(s) of the reference designs to remove.

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.
