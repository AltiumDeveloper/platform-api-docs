---
title: "gloApps"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-apps"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloApps

Gets a list of [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

### Type

#### [`GloAppsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-connection.md) object

A connection to a list of items.

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

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[GloAppSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-sort-input.md) list input

#### `where` · [`GloAppFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) input
