---
title: "SupRefDesignFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-ref-design-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupRefDesignFilterInput

Input for filtering reference designs by additional conditions.

### Member Of

[`supRefDesigns`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-designs.md) query

```graphql
input SupRefDesignFilterInput {
  applicationIds: [String!]
  categoryIds: [String!]
  hasEvalBoard: Boolean
  isVerified: Boolean
  publisherIds: [String!]
  statuses: [SupRefDesignStatus!]
  tags: [String!]
  types: [SupRefDesignType!]
}
```

### Fields

#### `SupRefDesignFilterInput.applicationIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of application identifiers if specified.

#### `SupRefDesignFilterInput.categoryIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of category identifiers if specified.

#### `SupRefDesignFilterInput.hasEvalBoard` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Filter to only include designs that have evaluation boards.

#### `SupRefDesignFilterInput.isVerified` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Filter by verification status if specified.

#### `SupRefDesignFilterInput.publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of publisher (company) identifiers if specified.

#### `SupRefDesignFilterInput.statuses` · [`[SupRefDesignStatus!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-status.md) list enum supply

Filter by a list of reference design statuses if specified.

#### `SupRefDesignFilterInput.tags` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of tags if specified.

#### `SupRefDesignFilterInput.types` · [`[SupRefDesignType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-type.md) list enum supply

Filter by a list of reference design types if specified.
