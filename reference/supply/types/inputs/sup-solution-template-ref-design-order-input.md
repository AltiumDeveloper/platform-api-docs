---
title: "SupSolutionTemplateRefDesignOrderInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-ref-design-order-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignOrderInput

Input for ordering solution templates or reference designs by one or more fields.

### Member Of

[`supSolutionTemplateRefDesignSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-ref-design-search.md) query

```graphql
input SupSolutionTemplateRefDesignOrderInput {
  createdAt: SupSolutionTemplateRefDesignSortDirection
  releaseDate: SupSolutionTemplateRefDesignSortDirection
  stableName: SupSolutionTemplateRefDesignSortDirection
  title: SupSolutionTemplateRefDesignSortDirection
  type: SupSolutionTemplateRefDesignSortDirection
  updatedAt: SupSolutionTemplateRefDesignSortDirection
}
```

### Fields

#### `SupSolutionTemplateRefDesignOrderInput.createdAt` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-ref-design-sort-direction.md) enum supply

Sort by creation date in the specified direction.

#### `SupSolutionTemplateRefDesignOrderInput.releaseDate` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-ref-design-sort-direction.md) enum supply

Sort by release date in the specified direction.

#### `SupSolutionTemplateRefDesignOrderInput.stableName` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-ref-design-sort-direction.md) enum supply

Sort by stable name in the specified direction.

#### `SupSolutionTemplateRefDesignOrderInput.title` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-ref-design-sort-direction.md) enum supply

Sort by title in the specified direction.

#### `SupSolutionTemplateRefDesignOrderInput.type` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-ref-design-sort-direction.md) enum supply

Sort by type in the specified direction.

#### `SupSolutionTemplateRefDesignOrderInput.updatedAt` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-ref-design-sort-direction.md) enum supply

Sort by last update date in the specified direction.
