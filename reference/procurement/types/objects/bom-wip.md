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

- [Consolidated BOM](https://w3id.org/altium/cdm/procurement/ConsolidatedBOM) — Consolidated BOM represents the aggregated bill of materials across one or more Projects or variants, combining all required Parts into a single, unified view for procurement and manufacturing.

  - IRI: [`https://w3id.org/altium/cdm/procurement/ConsolidatedBOM`](https://w3id.org/altium/cdm/procurement/ConsolidatedBOM)
  - GRID: `grid:workspace:{workspace-id}:procurement:bom/{id}`

- [Managed BOM](https://w3id.org/altium/cdm/procurement/ManagedBOM) — A bill of materials kept in a Workspace and worked on in the BOM Portal, where its lines are enriched with manufacturer and supplier data for review and procurement. It can be created from a design project (one of its variants or releases) or uploaded as a CSV/XLS file from any source. A Managed BOM made from a project keeps a link to that project, so it can be updated when the project changes, either in place or as a new revision; snapshots of its data at a point in time are kept as BOM releases.

  - IRI: [`https://w3id.org/altium/cdm/procurement/ManagedBOM`](https://w3id.org/altium/cdm/procurement/ManagedBOM)
  - GRID: `grid:workspace:{workspace-id}:procurement:bom/{id}`

### Returned By

[`bomBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/queries/bom-bom.md) query

### Member Of

[`BomBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-connection.md) object · [`BomBomsEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-edge.md) object · [`BomCreateBomPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-create-bom-payload.md) object

### Interfaces

#### [`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface

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

#### `bomId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the BOM.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Timestamp of the BOM creation.

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

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the BOM.

#### `releases` · [`BomReleasesConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-connection.md) object

A collection of all BOM releases.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `settings` · [`BomSettings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings.md) non-null object

Settings of the BOM (e.g., currency, production quantity, etc.).

#### `sources` · [`[BomSource!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) non-null interface

Sources of the BOM (e.g., a file, a design, or other BOMs).

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Timestamp of the last change in the BOM.
