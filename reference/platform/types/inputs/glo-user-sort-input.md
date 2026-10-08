---
title: "GloUserSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-sort-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUserSortInput

### Member Of

[`gloUsers`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-users.md) query

```graphql
input GloUserSortInput {
  email: SortEnumType
  userId: SortEnumType
  userName: SortEnumType
}
```

### Fields

#### `email` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Email address associated with this user account.

#### `userId` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

User's identifier.

#### `userName` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Username associated with the user account.
