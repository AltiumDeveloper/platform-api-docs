---
title: "desSymbolById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-symbol-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desSymbolById

Searches for a specific symbol by its unique identifier.

### Type

#### [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) object

A component symbol. These represent the body and the pins on the physical component.

```graphql
desSymbolById(
  id: ID!
): DesSymbol
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for a symbol.
