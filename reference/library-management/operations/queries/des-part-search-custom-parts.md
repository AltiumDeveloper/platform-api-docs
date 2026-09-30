---
title: "desPartSearchCustomParts"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-custom-parts"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartSearchCustomParts

Searches custom parts by manufacturer and MPN in all custom part sources.

```graphql
desPartSearchCustomParts(
  items: [DesPartManufacturerPartIdInput!]!
): [DesPartCustomPartSearchResultItem!]!
```

### Arguments

#### `desPartSearchCustomParts.items` · [`[DesPartManufacturerPartIdInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-manufacturer-part-id-input.md) non-null input library-management

The manufacturer part identifiers to search by.

### Type

#### [`DesPartCustomPartSearchResultItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-search-result-item.md) object library-management

Represents a search result item.
