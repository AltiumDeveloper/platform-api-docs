---
title: "DesSimulation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-simulation"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSimulation

Component simulation information.

### Member Of

[`DesComponentDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) object

```graphql
type DesSimulation {
  comment: String!
  createdBy: DesUser!
  dataDownloadUrl: String!
  description: String!
  folder: DesFolder
  guid: String! @deprecated
  itemInternalId: String!
  name: String!
  revisionInternalId: String!
  updatedBy: DesUser!
}
```

### Fields

#### `DesSimulation.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity comment.

#### `DesSimulation.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this entity was created by.

#### `DesSimulation.dataDownloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity data download URL.

#### `DesSimulation.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity description.

#### `DesSimulation.folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

ECAD entity folder.

#### `DesSimulation.itemInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Item internal identifier.

#### `DesSimulation.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ECAD entity name.

#### `DesSimulation.revisionInternalId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Revision internal identifier.

#### `DesSimulation.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this entity was last updated by.

#### Deprecated

#### `DesSimulation.guid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use `RevisionInternalId` instead.
