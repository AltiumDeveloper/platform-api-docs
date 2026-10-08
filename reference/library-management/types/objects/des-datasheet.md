---
title: "DesDatasheet"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesDatasheet

A component datasheet.

### Common Data Model

- [Datasheet](https://w3id.org/altium/cdm/library/Datasheet) — Datasheet represents a technical document associated with a Component or Part, providing authoritative specifications, electrical characteristics, and manufacturer information.

  - IRI: [`https://w3id.org/altium/cdm/library/Datasheet`](https://w3id.org/altium/cdm/library/Datasheet)
  - GRID: `grid:workspace:{workspace-id}:library:datasheet/{id}`

### Returned By

[`desDatasheetById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-datasheet-by-id.md) query

### Member Of

[`DesComponentDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) object · [`DesDatasheetConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-connection.md) object · [`DesDatasheetEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesDatasheet implements Node {
  comment: String!
  createdBy: DesUser!
  dataDownloadUrl: String!
  description: String!
  folder: DesFolder
  id: ID!
  itemInternalId: String!
  name: String!
  revisionInternalId: String!
  updatedBy: DesUser!
}
```

### Fields

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity comment.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user this entity was created by.

#### `dataDownloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity data download URL.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity description.

#### `folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object Platform

ECAD entity folder.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Datasheet node identifier.

#### `itemInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Item internal identifier.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ECAD entity name.

#### `revisionInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Revision internal identifier.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user this entity was last updated by.
