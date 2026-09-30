---
title: "GloUserSpace"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-space"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUserSpace

### Member Of

[`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) object

```graphql
type GloUserSpace {
  defaultLanguage: String
  domain: String
  id: ID!
  isPublic: Boolean!
  name: String
  userSpaceId: String
}
```

### Fields

#### `GloUserSpace.defaultLanguage` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Default language for this user space.

#### `GloUserSpace.domain` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Domain associated with this user space.

#### `GloUserSpace.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

User space global resource identifier.

#### `GloUserSpace.isPublic` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether this user space is publicly visible.

#### `GloUserSpace.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User space name.

#### `GloUserSpace.userSpaceId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User space identifier.
