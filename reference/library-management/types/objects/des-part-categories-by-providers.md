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

#### `customPart` · [`[DesPartCategory!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) list object

Categories from custom parts.

#### `siliconExpertPart` · [`[DesPartCategory!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) list object

Categories from \*SiliconExpert\* parts.

#### `supplyPart` · [`[DesPartCategory!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) non-null object

Categories from supply parts.

#### `z2DataPart` · [`[DesPartCategory!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) list object

Categories from \*Z2Data\* parts.
