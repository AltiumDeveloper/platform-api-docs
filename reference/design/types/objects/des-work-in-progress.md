---
title: "DesWorkInProgress"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-work-in-progress"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkInProgress

The most recent version of a design.

### Member Of

[`DesDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design.md) object

```graphql
type DesWorkInProgress {
  variants(
    where: DesWipVariantFilterInput
  ): [DesWipVariant!]!
}
```

### Fields

#### `variants` · [`[DesWipVariant!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) non-null object

The list of variants contained in your work in progress (WIP) in this design.

##### `where` · [`DesWipVariantFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-wip-variant-filter-input.md) input
