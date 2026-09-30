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

#### `gloUserGroups.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `gloUserGroups.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `gloUserGroups.filter` · [`GloUserGroupInputFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-group-input-filter-input.md) input platform

#### `gloUserGroups.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `gloUserGroups.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `gloUserGroups.order` · [`[GloUserGroupSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-group-sort-input.md) list input platform

### Type

#### [`GloUserGroupConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-connection.md) object platform

A connection to a list of items.
