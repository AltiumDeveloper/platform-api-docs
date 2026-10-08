---
title: "gloUserGroups"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-user-groups"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloUserGroups

Retrieves user groups.

### Type

#### [`GloUserGroupConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-connection.md) object

A connection to a list of items.

```graphql
gloUserGroups(
  after: String
  before: String
  filter: GloUserGroupInputFilterInput
  first: Int
  last: Int
  order: [GloUserGroupSortInput!]
): GloUserGroupConnection
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `filter` · [`GloUserGroupInputFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-group-input-filter-input.md) input

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[GloUserGroupSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-group-sort-input.md) list input
