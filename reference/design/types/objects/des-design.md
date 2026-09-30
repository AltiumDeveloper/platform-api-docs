---
title: "DesDesign"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesDesign

A design manages all of the schematic, PCB, and BOM content for a project.

### Member Of

[`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

```graphql
type DesDesign {
  releases(
    after: String
    before: String
    first: Int
    last: Int
    where: DesReleaseFilterInput
  ): DesReleaseConnection
  variants(
    where: DesWipVariantFilterInput
  ): [DesWipVariant!]!
  workInProgress: DesWorkInProgress! @deprecated
}
```

### Fields

#### `DesDesign.releases` · [`DesReleaseConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-connection.md) object design

The list of published versions of the design grouped into pages.

##### `DesDesign.releases.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesDesign.releases.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesDesign.releases.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesDesign.releases.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesDesign.releases.where` · [`DesReleaseFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-filter-input.md) input design

#### `DesDesign.variants` · [`[DesWipVariant!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) non-null object design

The list of variants contained in your work in progress (WIP) in this design.

##### `DesDesign.variants.where` · [`DesWipVariantFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-wip-variant-filter-input.md) input design

#### Deprecated

#### `DesDesign.workInProgress` · [`DesWorkInProgress!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-work-in-progress.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `variants` instead.
