---
title: "DesReleaseVariantFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-variant-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesReleaseVariantFilterInput

A variant contains a specific configuration of a base design.

### Member Of

[`DesReleaseVariantFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-variant-filter-input.md) input

```graphql
input DesReleaseVariantFilterInput {
  and: [DesReleaseVariantFilterInput!]
  name: StringOperationFilterInput
  or: [DesReleaseVariantFilterInput!]
}
```

### Fields

#### `and` · [`[DesReleaseVariantFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-variant-filter-input.md) list input

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The descriptive label for this design variant.

#### `or` · [`[DesReleaseVariantFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-variant-filter-input.md) list input
