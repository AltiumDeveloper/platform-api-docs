---
title: "DesAddFootprintToComponentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-add-footprint-to-component-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesAddFootprintToComponentInput

Input for adding a footprint to a component.

### Member Of

[`desAddFootprintToComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-add-footprint-to-component.md) mutation

```graphql
input DesAddFootprintToComponentInput {
  addAtIndex: Int
  componentId: ID!
  footprintId: ID!
}
```

### Fields

#### `DesAddFootprintToComponentInput.addAtIndex` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The index that the footprint should be added to the component at. If set as 0, it is set as the first and default footprint for the component. If omitted or set as `null`, it is set as the last listed footprint.

#### `DesAddFootprintToComponentInput.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The component identifier.

#### `DesAddFootprintToComponentInput.footprintId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the footprint to add to the component.
