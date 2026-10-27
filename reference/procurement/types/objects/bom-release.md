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

- [BOM Release](https://w3id.org/altium/cdm/procurement/BomRelease) — A static snapshot of a Managed BOM's data, saved under a release name with an incremented revision number and optional notes. The BOM Portal makes a release automatically when a Managed BOM is first created and again once its data has been mapped, and further releases can be made whenever needed. Each release moves through its own lifecycle states (by default Draft, Approved and Obsolete), and a Workspace can be configured to block releasing while the BOM has Error or Fatal Error issues.

  - IRI: [`https://w3id.org/altium/cdm/procurement/BomRelease`](https://w3id.org/altium/cdm/procurement/BomRelease)
  - GRID: `grid:workspace:{workspace-id}:procurement:bom-release/{id}`

### Returned By

[`bomBomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/queries/bom-bom-release.md) query

### Member Of

[`BomChangeBomReleaseLifecycleStatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-change-bom-release-lifecycle-state-payload.md) object · [`BomReleasesConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-connection.md) object · [`BomReleasesEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-edge.md) object · [`BomReleaseSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release-source.md) object

### Interfaces

#### [`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface

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

#### `bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the BOM.

#### `healthChecks` · [`[BomHealthCheck!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object

Effective health checks applicable to this BOM.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

ID of the BOM.

#### `incompleteHealthChecks` · [`[BomHealthCheck!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object

List of incomplete health checks. Some issues reported by these health checks may already be reported and included in the response, but the full set is still being processed and new issues may appear.

#### `issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object

Issues associated with the BOM.

#### `itemElementAttributes` · [`[BomItemElementAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute.md) non-null object

A list of all custom BOM item element's attributes.

#### `items` · [`BomItemsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-connection.md) object

BOM items.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `lifeCycleDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the lifecycle definition used for this release.

#### `lifeCycleStateId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the lifecycle state the release is in.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the BOM.

#### `releasedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Timestamp of the release creation.

#### `releaseHrid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Human-readable ID of the release.

#### `releaseId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the release.

#### `releaseNotes` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Release notes specified for the release.

#### `settings` · [`BomSettings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings.md) non-null object

Settings of the BOM (e.g., currency, production quantity, etc.).

#### `sources` · [`[BomSource!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) non-null interface

Sources of the BOM (e.g., a file, a design, or other BOMs).
