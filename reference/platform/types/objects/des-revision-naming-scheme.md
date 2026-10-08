---
title: "DesRevisionNamingScheme"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesRevisionNamingScheme

Revision naming scheme details obtained by [`desRevisionNamingSchemes`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-schemes.md). More information is available on revision naming schemes at: <https://www.altium.com/documentation/altium-designer/accessing-detailed-item-view#!revision_naming_scheme_dlg>

### Common Data Model

- [Revision Naming Scheme](https://w3id.org/altium/cdm/platform/NamingScheme) — Defines the format of Revision IDs for the Items that use it: one to three levels (e.g. Model, Prototype and Revision), each with its own format, separator and minimum width. The scheme is chosen per Item when the Item is created and cannot be changed after its first release. It is distinct from the Item Naming Scheme, which determines the Item ID rather than the revision's ID.

  - IRI: [`https://w3id.org/altium/cdm/platform/NamingScheme`](https://w3id.org/altium/cdm/platform/NamingScheme)
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

#### `contentTypes` · [`[DesContentTypeKind!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) non-null enum

The [`DesContentTypeKind`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) list for this revision naming scheme.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this revision naming scheme was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this revision naming scheme was created by.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier.

#### `isControlledPerContentType` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

If true, the revision naming scheme is only applicable to objects of the content types specified by `contentTypes`.

#### `itemRevisionSeparator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The separator used between item identifier and revision identifier.

#### `levels` · [`[DesRevisionNamingSchemeLevel!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme-level.md) non-null object

The [`DesRevisionNamingSchemeLevel`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme-level.md) list for this revision naming scheme.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this revision naming scheme.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this revision naming scheme was last updated at.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this revision naming scheme was last updated by.

#### Deprecated

#### `revisionNamingSchemeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use `id` instead.
