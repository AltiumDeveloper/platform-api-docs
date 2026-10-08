---
title: "GloCusExecutionContext"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-execution-context"
bounded_context: "Customization"
kind: "enums"
experimental: false
deprecated: false
---

# GloCusExecutionContext

Represents the types of execution context for extension points.

### Member Of

[`GloCusExecutionContextOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-execution-context-operation-filter-input.md) input · [`GloCusExtensionPoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point.md) object

```graphql
enum GloCusExecutionContext {
  SYSTEM
  USER
}
```

### Values

#### `SYSTEM`

Extension points assignments are executed under the system context.

#### `USER`

Extension point assignments are executed under the user context.
