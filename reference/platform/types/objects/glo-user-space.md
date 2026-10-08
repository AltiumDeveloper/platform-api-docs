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

#### `defaultLanguage` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Default language for this user space.

#### `domain` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Domain associated with this user space.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

User space global resource identifier.

#### `isPublic` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether this user space is publicly visible.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User space name.

#### `userSpaceId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User space identifier.
