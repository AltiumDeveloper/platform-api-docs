---
title: "desUpdateSymbol"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-symbol"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desUpdateSymbol

Updates the specified symbol. This will create a new revision of the symbol, and reset the lifecycle state.

```graphql
desUpdateSymbol(
  input: DesUpdateSymbolInput!
): DesUpdateSymbolPayload!
```

### Arguments

#### `desUpdateSymbol.input` · [`DesUpdateSymbolInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-symbol-input.md) non-null input library-management

### Type

#### [`DesUpdateSymbolPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-symbol-payload.md) object library-management

Payload of updating a symbol.
