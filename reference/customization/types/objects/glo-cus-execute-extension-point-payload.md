---
title: "GloCusExecuteExtensionPointPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-execute-extension-point-payload"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusExecuteExtensionPointPayload

Represents output value for extension point execution.

### Returned By

[`gloCusExecuteExtensionPoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-execute-extension-point.md) mutation

```graphql
type GloCusExecuteExtensionPointPayload {
  executions: [GloCusAssignmentExecution!]!
}
```

### Fields

#### `executions` · [`[GloCusAssignmentExecution!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-execution.md) non-null object

Per-assignment dispatch results, one entry per active assignment.
