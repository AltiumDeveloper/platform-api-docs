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

#### `applicationIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of application identifiers if specified.

#### `categoryIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of category identifiers if specified.

#### `hasEvalBoard` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter to only include designs that have evaluation boards.

#### `isVerified` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter by verification status if specified.

#### `publisherIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of publisher (company) identifiers if specified.

#### `statuses` · [`[SupSolutionTemplateStatus]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) list enum

Filter by a list of solution template or reference design statuses if specified.

#### `tags` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of tags if specified.
