---
title: "gloUsers"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-users"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloUsers

Retrieves list of users by filter.

### Type

#### [`GloUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-connection.md) object

A connection to a list of items.

```graphql
gloUsers(
  after: String
  before: String
  filter: GloUserInputFilterInput
  first: Int
  last: Int
  order: [GloUserSortInput!]
): GloUserConnection
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `filter` · [`GloUserInputFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-input-filter-input.md) input

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[GloUserSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-sort-input.md) list input
