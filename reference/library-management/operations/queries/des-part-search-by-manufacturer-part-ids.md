---
title: "desPartSearchByManufacturerPartIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-by-manufacturer-part-ids"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartSearchByManufacturerPartIds

Searches parts by their manufacturer name and part number.

### Type

#### [`DesPartSearchByManufacturerPartIdsResultItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-by-manufacturer-part-ids-result-item.md) object

Represents a search result item.

```graphql
desPartSearchByManufacturerPartIds(
  items: [DesPartManufacturerPartIdInput!]!
  options: DesPartSearchByManufacturerPartIdsOptionsInput
): [DesPartSearchByManufacturerPartIdsResultItem!]!
```

### Arguments

#### `items` · [`[DesPartManufacturerPartIdInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-manufacturer-part-id-input.md) non-null input

The manufacturer part identifiers to search by.

#### `options` · [`DesPartSearchByManufacturerPartIdsOptionsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-by-manufacturer-part-ids-options-input.md) input

The options to apply to the search.
