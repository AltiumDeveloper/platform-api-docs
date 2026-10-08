---
title: "bomBoms"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/queries/bom-boms"
bounded_context: "Procurement"
kind: "queries"
experimental: false
deprecated: false
---

# bomBoms

Get all available BOMs in the workspace.

### Type

#### [`BomBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-connection.md) object

A connection to a list of items.

```graphql
bomBoms(
  after: String
  before: String
  first: Int
  last: Int
): BomBomsConnection
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.
