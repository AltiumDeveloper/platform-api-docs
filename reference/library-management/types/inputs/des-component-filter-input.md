---
title: "DesComponentFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesComponentFilterInput

A component contains the parametric details of a PCB part.

```graphql
input DesComponentFilterInput {
  comment: DesComponentStringOperationFilterInput
  description: DesComponentStringOperationFilterInput
  name: DesComponentStringOperationFilterInput
}
```

### Fields

#### `comment` · [`DesComponentStringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-string-operation-filter-input.md) input

The additional information for this component.

#### `description` · [`DesComponentStringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-string-operation-filter-input.md) input

The summary of function or other performance details for this component.

#### `name` · [`DesComponentStringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-string-operation-filter-input.md) input

The library label for this component.
