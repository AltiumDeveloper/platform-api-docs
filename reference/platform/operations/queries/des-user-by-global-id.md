---
title: "desUserByGlobalId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-user-by-global-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desUserByGlobalId

Gets a user by the specified global identifier.

```graphql
desUserByGlobalId(
  id: String!
): DesUser
```

### Arguments

#### `desUserByGlobalId.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The global user identifier.

### Type

#### [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object platform

User details with the identifier and nullable extra fields.
