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

```graphql
desSymbolById(
  id: ID!
): DesSymbol
```

### Arguments

#### `desSymbolById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for a symbol.

### Type

#### [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) object library-management

A component symbol. These represent the body and the pins on the physical component.
