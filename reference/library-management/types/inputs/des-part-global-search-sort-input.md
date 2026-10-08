---
title: "DesPartGlobalSearchSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-global-search-sort-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartGlobalSearchSortInput

Represents the input for sorting parts.

### Member Of

[`desPartGlobalSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-global-search.md) query

```graphql
input DesPartGlobalSearchSortInput {
  attribute: DesPartAttributeSortInput
  manufacturerName: SortEnumType
  medianPrice1000: SortEnumType
  mpn: SortEnumType
}
```

### Fields

#### `attribute` · [`DesPartAttributeSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-attribute-sort-input.md) input

The sort order for the attribute.

#### `manufacturerName` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The sort order for the manufacturer name.

#### `medianPrice1000` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The sort order for the median price (only for Altium part provider).

#### `mpn` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The sort order for the manufacturer part number.
