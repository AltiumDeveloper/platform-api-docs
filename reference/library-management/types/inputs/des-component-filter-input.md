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

#### `DesComponentFilterInput.comment` · [`DesComponentStringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-string-operation-filter-input.md) input library-management

The additional information for this component.

#### `DesComponentFilterInput.description` · [`DesComponentStringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-string-operation-filter-input.md) input library-management

The summary of function or other performance details for this component.

#### `DesComponentFilterInput.name` · [`DesComponentStringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-string-operation-filter-input.md) input library-management

The library label for this component.
