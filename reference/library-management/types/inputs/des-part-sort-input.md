---
title: "DesPartSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-sort-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSortInput

Represents the input for sorting parts.

### Member Of

[`desPartSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search.md) query

```graphql
input DesPartSortInput {
  attribute: DesPartAttributeSortInput
  categoryName: SortEnumType
  lifecycleState: SortEnumType
  manufacturerName: SortEnumType
  medianPrice1000: SortEnumType
  mpn: SortEnumType
}
```

### Fields

#### `attribute` · [`DesPartAttributeSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-attribute-sort-input.md) input

The sort order for the attribute.

#### `categoryName` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The sort order for the category name.

#### `lifecycleState` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The sort order for the lifecycle state. Not supported yet and must not be provided.

#### `manufacturerName` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The sort order for the manufacturer name.

#### `medianPrice1000` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The sort order for the median price (only for Altium part provider).

#### `mpn` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The sort order for the manufacturer part number.
