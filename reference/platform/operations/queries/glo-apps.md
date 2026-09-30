---
title: "gloApps"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-apps"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloApps

Gets a list of `GloApp`.

```graphql
gloApps(
  after: String
  before: String
  first: Int
  last: Int
  order: [GloAppSortInput!]
  where: GloAppFilterInput
): GloAppsConnection
```

### Arguments

#### `gloApps.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `gloApps.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `gloApps.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `gloApps.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `gloApps.order` · [`[GloAppSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-sort-input.md) list input platform

#### `gloApps.where` · [`GloAppFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) input platform

### Type

#### [`GloAppsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-connection.md) object platform

A connection to a list of items.
