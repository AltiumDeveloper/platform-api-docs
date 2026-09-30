---
title: "DesDesignItemParameterFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-parameter-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDesignItemParameterFilterInput

A parameter describing the design item.

### Member Of

[`DesDesignItemParameterFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-parameter-filter-input.md) input · [`ListFilterInputTypeOfDesDesignItemParameterFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/list-filter-input-type-of-des-design-item-parameter-filter-input.md) input

```graphql
input DesDesignItemParameterFilterInput {
  and: [DesDesignItemParameterFilterInput!]
  name: StringOperationFilterInput
  or: [DesDesignItemParameterFilterInput!]
  value: StringOperationFilterInput
}
```

### Fields

#### `DesDesignItemParameterFilterInput.and` · [`[DesDesignItemParameterFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-parameter-filter-input.md) list input design

#### `DesDesignItemParameterFilterInput.name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

Parameter name.

#### `DesDesignItemParameterFilterInput.or` · [`[DesDesignItemParameterFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-parameter-filter-input.md) list input design

#### `DesDesignItemParameterFilterInput.value` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

Parameter value.
