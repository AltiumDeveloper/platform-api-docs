---
title: "DesLayerFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-layer-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLayerFilterInput

Information about a specific layer in the PCB.

### Member Of

[`DesDesignItemFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) input · [`DesLayerFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-layer-filter-input.md) input · [`DesTrackFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) input

```graphql
input DesLayerFilterInput {
  and: [DesLayerFilterInput!]
  name: StringOperationFilterInput
  or: [DesLayerFilterInput!]
}
```

### Fields

#### `and` · [`[DesLayerFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-layer-filter-input.md) list input

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

Layer name.

#### `or` · [`[DesLayerFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-layer-filter-input.md) list input
