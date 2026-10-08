---
title: "DesPartSearchByManufacturerPartIdsResultItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-by-manufacturer-part-ids-result-item"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchByManufacturerPartIdsResultItem

Represents a search result item.

### Returned By

[`desPartSearchByManufacturerPartIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-by-manufacturer-part-ids.md) query

```graphql
type DesPartSearchByManufacturerPartIdsResultItem {
  part: DesPart
  requested: DesPartManufacturerPartId!
}
```

### Fields

#### `part` · [`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object

The found part.

#### `requested` · [`DesPartManufacturerPartId!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id.md) non-null object

The requested part identifier.
