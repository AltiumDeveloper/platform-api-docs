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

#### `assemblyVariants` · [`[DesPartProjectUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-project-usage.md) list object

The assembly variants.

#### `bomReleaseUsages` · [`[DesPartBomUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) list object

The BOM release usages.

#### `componentUsages` · [`[DesPartComponentUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-component-usage.md) list object

The component usages.

#### `consolidatedBomReleasesUsages` · [`[DesPartBomUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) list object

The consolidated BOM releases usages.

#### `projectUsages` · [`[DesPartProjectUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-project-usage.md) list object

The project usages.

#### `wipBomUsages` · [`[DesPartBomUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) list object

The WIP BOM usages.

#### `wipConsolidatedBomUsages` · [`[DesPartBomUsage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) list object

The WIP consolidated BOM usages.
