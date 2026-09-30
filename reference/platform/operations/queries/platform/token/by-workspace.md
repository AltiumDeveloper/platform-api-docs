---
title: "platform.token.byWorkspace"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/by-workspace"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# platform.token.byWorkspace

Gets a list of `PlatformToken` the user has access to in the Workspace, determined by the access token.

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

#### `byWorkspace.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `byWorkspace.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `byWorkspace.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `byWorkspace.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `byWorkspace.order` · [`[PlatformTokenSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-sort-input.md) list input platform

#### `byWorkspace.where` · [`PlatformTokenFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) input platform

### Type

#### [`PlatformTokenConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-connection.md) object platform

A connection to a list of items.
