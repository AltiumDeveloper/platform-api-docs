---
title: "DesPartPartProvidersFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-part-providers-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartPartProvidersFilterInput

Represents the filter for part providers.

### Member Of

[`DesPartSearchByManufacturerPartIdsOptionsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-by-manufacturer-part-ids-options-input.md) input · [`DesPartSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-filter-input.md) input

```graphql
input DesPartPartProvidersFilterInput {
  hasAltiumPartProvider: Boolean
  hasCustomPartProvider: Boolean
  hasSiliconExpertPartProvider: Boolean
  hasZ2DataPartProvider: Boolean
}
```

### Fields

#### `DesPartPartProvidersFilterInput.hasAltiumPartProvider` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies if the part has an Altium part provider.

#### `DesPartPartProvidersFilterInput.hasCustomPartProvider` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies if the part has a custom part provider.

#### `DesPartPartProvidersFilterInput.hasSiliconExpertPartProvider` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies if the part has a \*SiliconExpert\* part provider.

#### `DesPartPartProvidersFilterInput.hasZ2DataPartProvider` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies if the part has a \*Z2Data\* part provider.
