---
title: "DesRevisionNamingSchemeLevel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme-level"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesRevisionNamingSchemeLevel

Information on the revision naming scheme level.

### Member Of

[`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) object

```graphql
type DesRevisionNamingSchemeLevel {
  createdAt: DateTime!
  createdBy: DesUser!
  levelIndex: Int!
  levelSeparator: String!
  levelSequence: String! @deprecated
  minimumWidth: Int!
  name: String!
  revisionNameLevelId: String!
  revisionNamingPolicy: DesRevisionNamingPolicy!
  updatedAt: DateTime!
  updatedBy: DesUser!
}
```

### Fields

#### `DesRevisionNamingSchemeLevel.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this revision naming scheme level was created.

#### `DesRevisionNamingSchemeLevel.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this revision naming scheme level was created by.

#### `DesRevisionNamingSchemeLevel.levelIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The level index of this level in the revision naming scheme.

#### `DesRevisionNamingSchemeLevel.levelSeparator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The separator prefix character for this revision naming scheme level.

#### `DesRevisionNamingSchemeLevel.minimumWidth` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The minimum character length allowed for this revision naming scheme level.

#### `DesRevisionNamingSchemeLevel.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this revision naming scheme level. In Altium Designer it is known as 'Caption'.

#### `DesRevisionNamingSchemeLevel.revisionNameLevelId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this revision naming scheme level.

#### `DesRevisionNamingSchemeLevel.revisionNamingPolicy` · [`DesRevisionNamingPolicy!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-revision-naming-policy.md) non-null enum platform

The naming policy for this revision naming scheme level.

#### `DesRevisionNamingSchemeLevel.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this revision naming scheme level was last updated at.

#### `DesRevisionNamingSchemeLevel.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this revision naming scheme level was last updated by.

#### Deprecated

#### `DesRevisionNamingSchemeLevel.levelSequence` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use `RevisionNamingPolicy` instead.
