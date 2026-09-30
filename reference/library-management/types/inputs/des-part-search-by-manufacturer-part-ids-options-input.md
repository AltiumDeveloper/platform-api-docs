---
title: "DesPartSearchByManufacturerPartIdsOptionsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-by-manufacturer-part-ids-options-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSearchByManufacturerPartIdsOptionsInput

Represents the search options.

### Member Of

[`desPartSearchByManufacturerPartIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-by-manufacturer-part-ids.md) query

```graphql
input DesPartSearchByManufacturerPartIdsOptionsInput {
  partProvidersFilter: DesPartPartProvidersFilterInput
}
```

### Fields

#### `DesPartSearchByManufacturerPartIdsOptionsInput.partProvidersFilter` · [`DesPartPartProvidersFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-part-providers-filter-input.md) input library-management

Filters by part providers.
