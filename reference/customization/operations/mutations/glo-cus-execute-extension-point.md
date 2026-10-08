---
title: "gloCusExecuteExtensionPoint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-execute-extension-point"
bounded_context: "Customization"
kind: "mutations"
experimental: false
deprecated: false
---

# gloCusExecuteExtensionPoint

Dispatches all active assignments of the given extension point in run-and-forget mode. Returns one entry per assignment; per-assignment failures are surfaced individually and do not abort the others.

### Type

#### [`GloCusExecuteExtensionPointPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-execute-extension-point-payload.md) object

Represents output value for extension point execution.

```graphql
gloCusExecuteExtensionPoint(
  input: GloCusExecuteExtensionPointInput!
): GloCusExecuteExtensionPointPayload!
```

### Arguments

#### `input` · [`GloCusExecuteExtensionPointInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-execute-extension-point-input.md) non-null input
