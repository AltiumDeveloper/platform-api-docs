---
title: "desUpdateComponentSymbol"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-symbol"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desUpdateComponentSymbol

Updates the specified component's symbol (does not affect the revision).

```graphql
desUpdateComponentSymbol(
  input: DesUpdateComponentSymbolInput!
): DesUpdateComponentSymbolPayload!
```

### Arguments

#### `desUpdateComponentSymbol.input` · [`DesUpdateComponentSymbolInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-component-symbol-input.md) non-null input library-management

### Type

#### [`DesUpdateComponentSymbolPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-component-symbol-payload.md) object library-management

Payload associated with updating the symbol of a component.
