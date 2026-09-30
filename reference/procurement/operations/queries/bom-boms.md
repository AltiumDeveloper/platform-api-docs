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

```graphql
bomBoms(
  after: String
  before: String
  first: Int
  last: Int
): BomBomsConnection
```

### Arguments

#### `bomBoms.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `bomBoms.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `bomBoms.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `bomBoms.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

### Type

#### [`BomBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-connection.md) object procurement

A connection to a list of items.
