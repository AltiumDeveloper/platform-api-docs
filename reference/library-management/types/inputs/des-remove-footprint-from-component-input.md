---
title: "DesRemoveFootprintFromComponentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-remove-footprint-from-component-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesRemoveFootprintFromComponentInput

Input for removing a footprint from a component.

### Member Of

[`desRemoveFootprintFromComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-remove-footprint-from-component.md) mutation

```graphql
input DesRemoveFootprintFromComponentInput {
  componentId: ID!
  footprintId: ID!
}
```

### Fields

#### `DesRemoveFootprintFromComponentInput.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The component identifier.

#### `DesRemoveFootprintFromComponentInput.footprintId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the footprint to remove from the component.
