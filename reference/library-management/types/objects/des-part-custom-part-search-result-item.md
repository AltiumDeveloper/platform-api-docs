---
title: "DesPartCustomPartSearchResultItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-search-result-item"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPartSearchResultItem

Represents a search result item.

### Returned By

[`desPartSearchCustomParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-custom-parts.md) query

```graphql
type DesPartCustomPartSearchResultItem {
  parts: [DesPartCustomPart!]!
  requested: DesPartManufacturerPartId!
}
```

### Fields

#### `parts` · [`[DesPartCustomPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part.md) non-null object

The found parts.

#### `requested` · [`DesPartManufacturerPartId!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id.md) non-null object

The requested part identifier.
