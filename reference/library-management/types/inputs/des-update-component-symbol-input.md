---
title: "DesUpdateComponentSymbolInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-component-symbol-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateComponentSymbolInput

Input for updating the symbol of a component.

### Member Of

[`desUpdateComponentSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-symbol.md) mutation

```graphql
input DesUpdateComponentSymbolInput {
  componentId: ID!
  symbolId: ID
}
```

### Fields

#### `componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The component identifier.

#### `symbolId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The identifier of the symbol to link to the component. If omitted or set to `null`, the symbol will be unlinked from the component.
