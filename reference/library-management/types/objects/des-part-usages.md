---
title: "DesPartUsages"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-usages"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUsages

Represents the usages of a part.

### Member Of

[`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object

```graphql
type DesPartUsages {
  assemblyVariants: [DesPartProjectUsage!]
  bomReleaseUsages: [DesPartBomUsage!]
  componentUsages: [DesPartComponentUsage!]
  consolidatedBomReleasesUsages: [DesPartBomUsage!]
  projectUsages: [DesPartProjectUsage!]
  wipBomUsages: [DesPartBomUsage!]
  wipConsolidatedBomUsages: [DesPartBomUsage!]
}
```

### Fields

#### `DesPartUsages.assemblyVariants` · [`[DesPartProjectUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-project-usage.md) list object library-management

The assembly variants.

#### `DesPartUsages.bomReleaseUsages` · [`[DesPartBomUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) list object library-management

The BOM release usages.

#### `DesPartUsages.componentUsages` · [`[DesPartComponentUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-component-usage.md) list object library-management

The component usages.

#### `DesPartUsages.consolidatedBomReleasesUsages` · [`[DesPartBomUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) list object library-management

The consolidated BOM releases usages.

#### `DesPartUsages.projectUsages` · [`[DesPartProjectUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-project-usage.md) list object library-management

The project usages.

#### `DesPartUsages.wipBomUsages` · [`[DesPartBomUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) list object library-management

The WIP BOM usages.

#### `DesPartUsages.wipConsolidatedBomUsages` · [`[DesPartBomUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) list object library-management

The WIP consolidated BOM usages.
