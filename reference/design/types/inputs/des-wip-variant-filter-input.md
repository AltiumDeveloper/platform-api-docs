---
title: "DesWipVariantFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-wip-variant-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWipVariantFilterInput

A variant contains a specific configuration of a base design.

### Member Of

[`DesWipVariantFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-wip-variant-filter-input.md) input

```graphql
input DesWipVariantFilterInput {
  and: [DesWipVariantFilterInput!]
  name: StringOperationFilterInput
  or: [DesWipVariantFilterInput!]
}
```

### Fields

#### `DesWipVariantFilterInput.and` · [`[DesWipVariantFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-wip-variant-filter-input.md) list input design

#### `DesWipVariantFilterInput.name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The descriptive label for this design variant.

#### `DesWipVariantFilterInput.or` · [`[DesWipVariantFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-wip-variant-filter-input.md) list input design
