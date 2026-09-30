---
title: "GloCusExtensionPointFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-extension-point-filter-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusExtensionPointFilterInput

### Member Of

[`GloCusExtensionPointFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-extension-point-filter-input.md) input · [`gloCusExtensionPoints`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-cus-extension-points.md) query

```graphql
input GloCusExtensionPointFilterInput {
  and: [GloCusExtensionPointFilterInput!]
  entityType: GloCusStringTypeFilterInput
  executionContext: GloCusExecutionContextOperationFilterInput
  extensionPointId: GloCusStringTypeFilterInput
  name: GloCusStringTypeFilterInput
  or: [GloCusExtensionPointFilterInput!]
  type: GloCusStringTypeFilterInput
}
```

### Fields

#### `GloCusExtensionPointFilterInput.and` · [`[GloCusExtensionPointFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-extension-point-filter-input.md) list input customization

#### `GloCusExtensionPointFilterInput.entityType` · [`GloCusStringTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-string-type-filter-input.md) input customization

#### `GloCusExtensionPointFilterInput.executionContext` · [`GloCusExecutionContextOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-execution-context-operation-filter-input.md) input customization

#### `GloCusExtensionPointFilterInput.extensionPointId` · [`GloCusStringTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-string-type-filter-input.md) input customization

#### `GloCusExtensionPointFilterInput.name` · [`GloCusStringTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-string-type-filter-input.md) input customization

#### `GloCusExtensionPointFilterInput.or` · [`[GloCusExtensionPointFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-extension-point-filter-input.md) list input customization

#### `GloCusExtensionPointFilterInput.type` · [`GloCusStringTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-string-type-filter-input.md) input customization
