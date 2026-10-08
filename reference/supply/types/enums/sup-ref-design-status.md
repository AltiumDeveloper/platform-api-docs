---
title: "SupRefDesignStatus"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-status"
bounded_context: "Supply"
kind: "enums"
experimental: false
deprecated: false
---

# SupRefDesignStatus

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object · [`SupRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-ref-design-filter-input.md) input

```graphql
enum SupRefDesignStatus {
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

The design is approved and published and it has active status.

#### `DRAFT`

Work in progress, not yet submitted for review.

#### `INACTIVE`

The design is not active.

#### `ON_HOLD`

Review or progress is paused pending further action.

#### `REJECTED`

The design was reviewed and rejected.

#### `REVIEWING`

The design is currently under review.

#### `SUBMITTED`

Design data has been submitted and awaits review.
