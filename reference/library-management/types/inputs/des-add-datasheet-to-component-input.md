---
title: "DesAddDatasheetToComponentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-add-datasheet-to-component-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesAddDatasheetToComponentInput

Input for adding a datasheet to a component.

### Member Of

[`desAddDatasheetToComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-add-datasheet-to-component.md) mutation

```graphql
input DesAddDatasheetToComponentInput {
  componentId: ID!
  datasheetId: ID!
}
```

### Fields

#### `componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The component identifier.

#### `datasheetId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the datasheet to add to the component.
