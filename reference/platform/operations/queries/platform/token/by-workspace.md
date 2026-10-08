---
title: "platform.token.byWorkspace"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/by-workspace"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# platform.token.byWorkspace

Gets a list of [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) the user has access to in the Workspace, determined by the access token.

### Type

#### [`PlatformTokenConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-connection.md) object

A connection to a list of items.

```graphql
platform {
  token {
    byWorkspace(
      after: String
      before: String
      first: Int
      last: Int
      order: [PlatformTokenSortInput!]
      where: PlatformTokenFilterInput
    ): PlatformTokenConnection
  }
}
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

#### `order` · [`[PlatformTokenSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-sort-input.md) list input

#### `where` · [`PlatformTokenFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) input
