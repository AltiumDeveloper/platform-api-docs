---
title: "DesRelease"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesRelease

A release is a published version of a design with additional generated files for manufacturing.

### Common Data Model

- [Hardware Project Release](https://altiumdeveloper.github.io/cdm/classes/des_ProjectRelease/) — Project Release captures an immutable snapshot of a PCB design project at a specific point in its lifecycle, packaging all design data, outputs, and metadata required for manufacturing, assembly, and downstream processes.
  - GRID: `grid:workspace:{workspace-id}:design:project-release/{id}`

### Returned By

[`desReleaseById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-release-by-id.md) query

### Member Of

[`DesReleaseConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-connection.md) object · [`DesReleaseEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesRelease implements Node {
  createdAt: DateTime!
  description: String!
  id: ID!
  manufacturePackages: [DesManufacturePackage!]! @deprecated
  releaseId: String!
  variants(
    where: DesReleaseVariantFilterInput
  ): [DesReleaseVariant!]!
}
```

### Fields

#### `DesRelease.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this release was created.

#### `DesRelease.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The summary of this release content or purpose.

#### `DesRelease.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier for this release (used by `desReleaseById`).

#### `DesRelease.releaseId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this release.

#### `DesRelease.variants` · [`[DesReleaseVariant!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-variant.md) non-null object design

The list of variants contained in this release.

##### `DesRelease.variants.where` · [`DesReleaseVariantFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-variant-filter-input.md) input design

#### Deprecated

#### `DesRelease.manufacturePackages` · [`[DesManufacturePackage!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-manufacture-package.md) **DEPRECATED** non-null object design

> **Deprecated:** Not implemented. Will soon be removed.

Not implemented.
