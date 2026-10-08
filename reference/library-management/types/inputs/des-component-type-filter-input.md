---
title: "DesComponentTypeFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-type-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesComponentTypeFilterInput

Represents a component type classification in the component library.

### Member Of

[`DesComponentTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-type-filter-input.md) input

```graphql
input DesComponentTypeFilterInput {
  and: [DesComponentTypeFilterInput!]
  name: StringOperationFilterInput
  or: [DesComponentTypeFilterInput!]
}
```

### Fields

#### `and` · [`[DesComponentTypeFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-type-filter-input.md) list input

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The display name of the component type.

#### `or` · [`[DesComponentTypeFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-type-filter-input.md) list input
