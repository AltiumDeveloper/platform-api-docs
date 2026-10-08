---
title: "GloCusExecutionContextOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-execution-context-operation-filter-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusExecutionContextOperationFilterInput

### Member Of

[`GloCusExtensionPointFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-extension-point-filter-input.md) input

```graphql
input GloCusExecutionContextOperationFilterInput {
  eq: GloCusExecutionContext
  in: [GloCusExecutionContext!]
  neq: GloCusExecutionContext
  nin: [GloCusExecutionContext!]
}
```

### Fields

#### `eq` · [`GloCusExecutionContext`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-execution-context.md) enum

#### `in` · [`[GloCusExecutionContext!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-execution-context.md) list enum

#### `neq` · [`GloCusExecutionContext`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-execution-context.md) enum

#### `nin` · [`[GloCusExecutionContext!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-execution-context.md) list enum
