---
title: "DesRemoveDatasheetFromComponentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-remove-datasheet-from-component-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesRemoveDatasheetFromComponentInput

Input for removing a datasheet from a component.

### Member Of

[`desRemoveDatasheetFromComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-remove-datasheet-from-component.md) mutation

```graphql
input DesRemoveDatasheetFromComponentInput {
  componentId: ID!
  datasheetId: ID!
}
```

### Fields

#### `DesRemoveDatasheetFromComponentInput.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The component identifier.

#### `DesRemoveDatasheetFromComponentInput.datasheetId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the datasheet to remove from the component.
