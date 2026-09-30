---
title: "SupSolutionTemplateRefDesignFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-ref-design-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignFilterInput

Input for filtering reference designs by additional conditions.

### Member Of

[`supSolutionTemplateRefDesignSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-ref-design-search.md) query

```graphql
input SupSolutionTemplateRefDesignFilterInput {
  applicationIds: [String]
  categoryIds: [String]
  hasEvalBoard: Boolean
  isVerified: Boolean
  publisherIds: [String]
  statuses: [SupSolutionTemplateStatus]
  tags: [String]
}
```

### Fields

#### `SupSolutionTemplateRefDesignFilterInput.applicationIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of application identifiers if specified.

#### `SupSolutionTemplateRefDesignFilterInput.categoryIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of category identifiers if specified.

#### `SupSolutionTemplateRefDesignFilterInput.hasEvalBoard` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Filter to only include designs that have evaluation boards.

#### `SupSolutionTemplateRefDesignFilterInput.isVerified` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Filter by verification status if specified.

#### `SupSolutionTemplateRefDesignFilterInput.publisherIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of publisher (company) identifiers if specified.

#### `SupSolutionTemplateRefDesignFilterInput.statuses` · [`[SupSolutionTemplateStatus]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) list enum supply

Filter by a list of solution template or reference design statuses if specified.

#### `SupSolutionTemplateRefDesignFilterInput.tags` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of tags if specified.
