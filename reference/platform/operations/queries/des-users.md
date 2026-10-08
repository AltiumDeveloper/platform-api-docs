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

### Type

#### [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object

User details with the identifier and nullable extra fields.

```graphql
desUsers(
  ids: [String!]!
  workspaceUrl: String
): [DesUser]!
```

### Arguments

#### `ids` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of user identifiers.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
