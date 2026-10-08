---
title: "DesPartAttributeSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-attribute-sort-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartAttributeSortInput

Represents the input for sorting by attribute.

### Member Of

[`DesPartGlobalSearchSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-global-search-sort-input.md) input · [`DesPartSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-sort-input.md) input

```graphql
input DesPartAttributeSortInput {
  attributeId: String!
  direction: SortEnumType!
}
```

### Fields

#### `attributeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the attribute.

#### `direction` · [`SortEnumType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) non-null enum

The sorting direction.
