---
title: "SupEvalKitStatus"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-eval-kit-status"
bounded_context: "Supply"
kind: "enums"
experimental: false
deprecated: false
---

# SupEvalKitStatus

### Member Of

[`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) object · [`SupEvalKitCreateEvalKitInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-create-eval-kit-input.md) input · [`SupEvalKitSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-search-filter-input.md) input · [`SupEvalKitUpdateEvalKitInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-update-eval-kit-input.md) input · [`SupEvalKitUpdateEvalKitStatusInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-update-eval-kit-status-input.md) input

```graphql
enum SupEvalKitStatus {
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

#### `ACTIVE`

The evaluation kit is approved and published and it has active status.

#### `DRAFT`

Work in progress, not yet submitted for review.

#### `INACTIVE`

The evaluation kit is not active.

#### `ON_HOLD`

Review or progress is paused pending further action.

#### `REJECTED`

The evaluation kit was reviewed and rejected.

#### `REVIEWING`

The evaluation kit is currently under review.

#### `SUBMITTED`

Evaluation kit data has been submitted and awaits review.
