---
title: "gloUsersByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-users-by-ids"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloUsersByIds

Retrieves list of users by their identifiers.

```graphql
gloUsersByIds(
  userIds: [ID!]!
): [GloUser]!
```

### Arguments

#### `gloUsersByIds.userIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) object platform
