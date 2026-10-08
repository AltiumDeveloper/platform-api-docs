---
title: "DesDesignItemFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDesignItemFilterInput

A design item is a specific instance of a part used in the design.

### Member Of

[`DesDesignItemFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) input

```graphql
input DesDesignItemFilterInput {
  and: [DesDesignItemFilterInput!]
  designator: StringOperationFilterInput
  layer: DesLayerFilterInput
  or: [DesDesignItemFilterInput!]
  parameters: ListFilterInputTypeOfDesDesignItemParameterFilterInput
}
```

### Fields

#### `and` · [`[DesDesignItemFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) list input

#### `designator` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The unique label for this design item.

#### `layer` · [`DesLayerFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-layer-filter-input.md) input

The layer(side) placement for this design item.

#### `or` · [`[DesDesignItemFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) list input

#### `parameters` · [`ListFilterInputTypeOfDesDesignItemParameterFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/list-filter-input-type-of-des-design-item-parameter-filter-input.md) input

The list of parameters describing the design item.
