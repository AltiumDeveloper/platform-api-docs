---
title: "BomRelease"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomRelease

Represents a release of the BOM (i.e., a snapshot of a work-in-progress BOM).

### Common Data Model

- [BOM Release](https://altiumdeveloper.github.io/cdm/classes/pro_BomRelease/) — A static snapshot of a Managed BOM's data, saved under a release name with an incremented revision number and optional notes. The BOM Portal makes a release automatically when a Managed BOM is first created and again once its data has been mapped, and further releases can be made whenever needed. Each release moves through its own lifecycle states (by default Draft, Approved and Obsolete), and a Workspace can be configured to block releasing while the BOM has Error or Fatal Error issues.
  - GRID: `grid:workspace:{workspace-id}:procurement:bom-release/{id}`

### Returned By

[`bomBomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/queries/bom-bom-release.md) query

### Member Of

[`BomChangeBomReleaseLifecycleStatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-change-bom-release-lifecycle-state-payload.md) object · [`BomReleasesConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-connection.md) object · [`BomReleasesEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-edge.md) object · [`BomReleaseSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release-source.md) object

### Interfaces

#### [`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface procurement

Represents a shared part of work-in-progress BOMs and releases of BOMs.

```graphql
type BomRelease implements Bom {
  bomId: String!
  healthChecks: [BomHealthCheck!]!
  id: ID!
  incompleteHealthChecks: [BomHealthCheck!]!
  issues: [BomIssue!]!
  itemElementAttributes: [BomItemElementAttribute!]!
  items(
    after: String
    before: String
    first: Int
    last: Int
  ): BomItemsConnection
  lifeCycleDefinitionId: String!
  lifeCycleStateId: String!
  name: String!
  releasedAt: DateTime!
  releaseHrid: String!
  releaseId: String!
  releaseNotes: String!
  settings: BomSettings!
  sources: [BomSource!]!
}
```

### Fields

#### `BomRelease.bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the BOM.

#### `BomRelease.healthChecks` · [`[BomHealthCheck!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object procurement

Effective health checks applicable to this BOM.

#### `BomRelease.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

ID of the BOM.

#### `BomRelease.incompleteHealthChecks` · [`[BomHealthCheck!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object procurement

List of incomplete health checks. Some issues reported by these health checks may already be reported and included in the response, but the full set is still being processed and new issues may appear.

#### `BomRelease.issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object procurement

Issues associated with the BOM.

#### `BomRelease.itemElementAttributes` · [`[BomItemElementAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute.md) non-null object procurement

A list of all custom BOM item element's attributes.

#### `BomRelease.items` · [`BomItemsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-connection.md) object procurement

BOM items.

##### `BomRelease.items.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `BomRelease.items.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `BomRelease.items.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `BomRelease.items.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `BomRelease.lifeCycleDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the lifecycle definition used for this release.

#### `BomRelease.lifeCycleStateId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the lifecycle state the release is in.

#### `BomRelease.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the BOM.

#### `BomRelease.releasedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

Timestamp of the release creation.

#### `BomRelease.releaseHrid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Human-readable ID of the release.

#### `BomRelease.releaseId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the release.

#### `BomRelease.releaseNotes` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Release notes specified for the release.

#### `BomRelease.settings` · [`BomSettings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings.md) non-null object procurement

Settings of the BOM (e.g., currency, production quantity, etc.).

#### `BomRelease.sources` · [`[BomSource!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) non-null interface procurement

Sources of the BOM (e.g., a file, a design, or other BOMs).
