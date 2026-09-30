---
title: "DesRevisionNamingScheme"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesRevisionNamingScheme

Revision naming scheme details obtained by `desRevisionNamingSchemes`. More information is available on revision naming schemes at: <https://www.altium.com/documentation/altium-designer/accessing-detailed-item-view#!revision_naming_scheme_dlg>

### Common Data Model

- [Revision Naming Scheme](https://altiumdeveloper.github.io/cdm/classes/plt_NamingScheme/)
  - GRID: `grid:workspace:{workspace-id}:platform:revision-naming-scheme/{id}`

### Returned By

[`desRevisionNamingSchemeByContentTypeKind`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-scheme-by-content-type-kind.md) query · [`desRevisionNamingSchemeById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-scheme-by-id.md) query · [`desRevisionNamingSchemes`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-schemes.md) query

```graphql
type DesRevisionNamingScheme {
  contentTypes: [DesContentTypeKind!]!
  createdAt: DateTime!
  createdBy: DesUser!
  id: ID!
  isControlledPerContentType: Boolean!
  itemRevisionSeparator: String!
  levels: [DesRevisionNamingSchemeLevel!]!
  name: String!
  revisionNamingSchemeId: String! @deprecated
  updatedAt: DateTime!
  updatedBy: DesUser!
}
```

### Fields

#### `DesRevisionNamingScheme.contentTypes` · [`[DesContentTypeKind!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) non-null enum platform

The `DesContentTypeKind` list for this revision naming scheme.

#### `DesRevisionNamingScheme.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this revision naming scheme was created.

#### `DesRevisionNamingScheme.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this revision naming scheme was created by.

#### `DesRevisionNamingScheme.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier.

#### `DesRevisionNamingScheme.isControlledPerContentType` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

If true, the revision naming scheme is only applicable to objects of the content types specified by `contentTypes`.

#### `DesRevisionNamingScheme.itemRevisionSeparator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The separator used between item identifier and revision identifier.

#### `DesRevisionNamingScheme.levels` · [`[DesRevisionNamingSchemeLevel!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme-level.md) non-null object platform

The `DesRevisionNamingSchemeLevel` list for this revision naming scheme.

#### `DesRevisionNamingScheme.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this revision naming scheme.

#### `DesRevisionNamingScheme.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this revision naming scheme was last updated at.

#### `DesRevisionNamingScheme.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this revision naming scheme was last updated by.

#### Deprecated

#### `DesRevisionNamingScheme.revisionNamingSchemeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use `id` instead.
