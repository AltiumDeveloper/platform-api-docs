---
title: "desUsers"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-users"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desUsers

Gets the specified workspace users by identifiers.

```graphql
desUsers(
  ids: [String!]!
  workspaceUrl: String
): [DesUser]!
```

### Arguments

#### `desUsers.ids` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The list of user identifiers.

#### `desUsers.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.

### Type

#### [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object platform

User details with the identifier and nullable extra fields.
