---
title: "DesPartCategoriesByProviders"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-categories-by-providers"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCategoriesByProviders

Represents a collection of part categories grouped by providers.

### Returned By

[`desPartCategoriesByProvider`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-categories-by-provider.md) query

```graphql
type DesPartCategoriesByProviders {
  customPart: [DesPartCategory!]
  siliconExpertPart: [DesPartCategory!]
  supplyPart: [DesPartCategory!]!
  z2DataPart: [DesPartCategory!]
}
```

### Fields

#### `DesPartCategoriesByProviders.customPart` · [`[DesPartCategory!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) list object library-management

Categories from custom parts.

#### `DesPartCategoriesByProviders.siliconExpertPart` · [`[DesPartCategory!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) list object library-management

Categories from \*SiliconExpert\* parts.

#### `DesPartCategoriesByProviders.supplyPart` · [`[DesPartCategory!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) non-null object library-management

Categories from supply parts.

#### `DesPartCategoriesByProviders.z2DataPart` · [`[DesPartCategory!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) list object library-management

Categories from \*Z2Data\* parts.
