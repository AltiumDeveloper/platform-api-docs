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

#### `attributes` · [`[DesPartSearchAttributeFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-attribute-filter-input.md) list input

A collection of attribute filters to search by.

#### `categoryName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of category names to search by.

#### `customPartSourceName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of custom part source names to search by.

#### `hasBomOrProjectsUsages` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Specifies if the part has usages in BOM, projects, or assemblies.

#### `hasComponentsUsages` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Specifies if the part has usages in components.

#### `hasUsages` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Specifies if the part has any usages.

#### `keyword` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The keyword to search for.

#### `lifecycleState` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of lifecycle state identifiers to search by. Not supported yet and must not be provided.

#### `manufacturerName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of manufacturer names to search by.

#### `mpn` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of manufacturer part numbers to search by.

#### `partProviders` · [`DesPartPartProvidersFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-part-providers-filter-input.md) input

The filter for part providers.

#### `tags` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

A collection of tag identifiers to search by. Not supported yet and must not be provided.

#### `usages` · [`[DesPartSearchUsagesFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-usages-filter-input.md) list input

A collection of usage filters to search by.

#### Deprecated

#### `supplierName` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** list scalar

> **Deprecated:** Supplier data is no longer indexed, so this field is not supported and must not be provided.

A collection of supplier names to search by.

#### `supplierPartNumber` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** list scalar

> **Deprecated:** Supplier data is no longer indexed, so this field is not supported and must not be provided.

A collection of supplier part numbers to search by.
