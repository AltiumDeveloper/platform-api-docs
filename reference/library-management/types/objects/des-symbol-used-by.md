---
title: "DesSymbolUsedBy"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-used-by"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSymbolUsedBy

Represents reverse relationships for a symbol (where the symbol is used).

### Member Of

[`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) object

```graphql
type DesSymbolUsedBy {
  components(
    after: String
    before: String
    first: Int
    last: Int
  ): DesComponentConnection
}
```

### Fields

#### `DesSymbolUsedBy.components` · [`DesComponentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-connection.md) object library-management

Gets all components that use this symbol, with cursor-based pagination.

##### `DesSymbolUsedBy.components.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesSymbolUsedBy.components.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesSymbolUsedBy.components.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesSymbolUsedBy.components.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.
