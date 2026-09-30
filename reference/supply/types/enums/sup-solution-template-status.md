---
title: "SupSolutionTemplateStatus"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status"
bounded_context: "Supply"
kind: "enums"
experimental: false
deprecated: false
---

# SupSolutionTemplateStatus

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-filter-input.md) input · [`SupSolutionTemplateRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-ref-design-filter-input.md) input · [`SupSolutionTemplateSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-search-filter-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateStatusInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-status-input.md) input

```graphql
enum SupSolutionTemplateStatus {
  ACTIVE
  DRAFT
  INACTIVE
  ON_HOLD
  REJECTED
  REVIEWING
  SUBMITTED
}
```

### Values

#### `SupSolutionTemplateStatus.ACTIVE`

The solution template is approved and published and it has active status.

#### `SupSolutionTemplateStatus.DRAFT`

Work in progress, not yet submitted for review.

#### `SupSolutionTemplateStatus.INACTIVE`

The solution template is not active.

#### `SupSolutionTemplateStatus.ON_HOLD`

Review or progress is paused pending further action.

#### `SupSolutionTemplateStatus.REJECTED`

The solution template was reviewed and rejected.

#### `SupSolutionTemplateStatus.REVIEWING`

The solution template is currently under review.

#### `SupSolutionTemplateStatus.SUBMITTED`

Solution Template data has been submitted and awaits review.
