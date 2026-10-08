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

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this revision naming scheme level was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this revision naming scheme level was created by.

#### `levelIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The level index of this level in the revision naming scheme.

#### `levelSeparator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The separator prefix character for this revision naming scheme level.

#### `minimumWidth` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The minimum character length allowed for this revision naming scheme level.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this revision naming scheme level. In Altium Designer it is known as 'Caption'.

#### `revisionNameLevelId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this revision naming scheme level.

#### `revisionNamingPolicy` · [`DesRevisionNamingPolicy!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-revision-naming-policy.md) non-null enum

The naming policy for this revision naming scheme level.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this revision naming scheme level was last updated at.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this revision naming scheme level was last updated by.

#### Deprecated

#### `levelSequence` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use `RevisionNamingPolicy` instead.
