---
title: "BomWip"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomWip

Represents a work-in-progress BOM (i.e., it is mutable and could change dynamically).

### Common Data Model

- [Consolidated BOM](https://altiumdeveloper.github.io/cdm/classes/pro_ConsolidatedBOM/) — Consolidated BOM represents the aggregated bill of materials across one or more Projects or variants, combining all required Parts into a single, unified view for procurement and manufacturing.
  - GRID: `grid:workspace:{workspace-id}:procurement:bom/{id}`
- [Managed BOM](https://altiumdeveloper.github.io/cdm/classes/pro_ManagedBOM/) — Managed BOM represents a version-controlled, workspace-stored bill of materials derived from a specific Project, preserving all Part selections, metadata, and supply chain links at a fixed point in time.
  - GRID: `grid:workspace:{workspace-id}:procurement:bom/{id}`

### Returned By

[`bomBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/queries/bom-bom.md) query

### Member Of

[`BomBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-connection.md) object · [`BomBomsEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-edge.md) object · [`BomCreateBomPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-create-bom-payload.md) object

### Interfaces

#### [`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface procurement

Represents a shared part of work-in-progress BOMs and releases of BOMs.

```graphql
type BomWip implements Bom {
  bomId: String!
  createdAt: DateTime!
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
  name: String!
  releases(
    after: String
    before: String
    first: Int
    last: Int
  ): BomReleasesConnection
  settings: BomSettings!
  sources: [BomSource!]!
  updatedAt: DateTime!
}
```

### Fields

#### `BomWip.bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the BOM.

#### `BomWip.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

Timestamp of the BOM creation.

#### `BomWip.healthChecks` · [`[BomHealthCheck!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object procurement

Effective health checks applicable to this BOM.

#### `BomWip.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

ID of the BOM.

#### `BomWip.incompleteHealthChecks` · [`[BomHealthCheck!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object procurement

List of incomplete health checks. Some issues reported by these health checks may already be reported and included in the response, but the full set is still being processed and new issues may appear.

#### `BomWip.issues` · [`[BomIssue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) non-null object procurement

Issues associated with the BOM.

#### `BomWip.itemElementAttributes` · [`[BomItemElementAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute.md) non-null object procurement

A list of all custom BOM item element's attributes.

#### `BomWip.items` · [`BomItemsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-items-connection.md) object procurement

BOM items.

##### `BomWip.items.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `BomWip.items.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `BomWip.items.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `BomWip.items.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `BomWip.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the BOM.

#### `BomWip.releases` · [`BomReleasesConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-connection.md) object procurement

A collection of all BOM releases.

##### `BomWip.releases.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `BomWip.releases.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `BomWip.releases.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `BomWip.releases.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `BomWip.settings` · [`BomSettings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings.md) non-null object procurement

Settings of the BOM (e.g., currency, production quantity, etc.).

#### `BomWip.sources` · [`[BomSource!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) non-null interface procurement

Sources of the BOM (e.g., a file, a design, or other BOMs).

#### `BomWip.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

Timestamp of the last change in the BOM.
