---
title: "DesPartSearchFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSearchFilterInput

Represents the filter for searching parts.

### Member Of

[`desPartSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search.md) query

```graphql
input DesPartSearchFilterInput {
  attributes: [DesPartSearchAttributeFilterInput!]
  categoryName: [String!]
  customPartSourceName: [String!]
  hasBomOrProjectsUsages: Boolean
  hasComponentsUsages: Boolean
  hasUsages: Boolean
  keyword: String
  lifecycleState: [String!]
  manufacturerName: [String!]
  mpn: [String!]
  partProviders: DesPartPartProvidersFilterInput
  supplierName: [String!] @deprecated
  supplierPartNumber: [String!] @deprecated
  tags: [String!]
  usages: [DesPartSearchUsagesFilterInput!]
}
```

### Fields

#### `DesPartSearchFilterInput.attributes` · [`[DesPartSearchAttributeFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-attribute-filter-input.md) list input library-management

A collection of attribute filters to search by.

#### `DesPartSearchFilterInput.categoryName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of category names to search by.

#### `DesPartSearchFilterInput.customPartSourceName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of custom part source names to search by.

#### `DesPartSearchFilterInput.hasBomOrProjectsUsages` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies if the part has usages in BOM, projects, or assemblies.

#### `DesPartSearchFilterInput.hasComponentsUsages` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies if the part has usages in components.

#### `DesPartSearchFilterInput.hasUsages` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies if the part has any usages.

#### `DesPartSearchFilterInput.keyword` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The keyword to search for.

#### `DesPartSearchFilterInput.lifecycleState` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of lifecycle state identifiers to search by. Not supported yet and must not be provided.

#### `DesPartSearchFilterInput.manufacturerName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of manufacturer names to search by.

#### `DesPartSearchFilterInput.mpn` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of manufacturer part numbers to search by.

#### `DesPartSearchFilterInput.partProviders` · [`DesPartPartProvidersFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-part-providers-filter-input.md) input library-management

The filter for part providers.

#### `DesPartSearchFilterInput.tags` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of tag identifiers to search by. Not supported yet and must not be provided.

#### `DesPartSearchFilterInput.usages` · [`[DesPartSearchUsagesFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-usages-filter-input.md) list input library-management

A collection of usage filters to search by.

#### Deprecated

#### `DesPartSearchFilterInput.supplierName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** list scalar common

> **Deprecated:** Supplier data is no longer indexed, so this field is not supported and must not be provided.

A collection of supplier names to search by.

#### `DesPartSearchFilterInput.supplierPartNumber` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** list scalar common

> **Deprecated:** Supplier data is no longer indexed, so this field is not supported and must not be provided.

A collection of supplier part numbers to search by.
