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

#### `gloUsers.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `gloUsers.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `gloUsers.filter` · [`GloUserInputFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-input-filter-input.md) input platform

#### `gloUsers.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `gloUsers.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `gloUsers.order` · [`[GloUserSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-sort-input.md) list input platform

### Type

#### [`GloUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-connection.md) object platform

A connection to a list of items.
