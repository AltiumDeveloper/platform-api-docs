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

- [BOM WIP](https://w3id.org/altium/cdm/procurement/BomWIP) — The current, editable working state of a Workspace BOM, as opposed to a BOM release, which is a static snapshot of its data. It is the common base of Managed BOM and Consolidated BOM; in the BOM Portal, BOM releases are made from a Managed BOM's working state.
  - IRI: [`https://w3id.org/altium/cdm/procurement/BomWIP`](https://w3id.org/altium/cdm/procurement/BomWIP)

### Returned By

[`bomBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/queries/bom-bom.md) query

### Member Of

[`BomBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-connection.md) object · [`BomBomsEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-boms-edge.md) object · [`BomCostedBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-costed-boms-connection.md) object · [`BomCostedBomsEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-costed-boms-edge.md) object · [`BomCreateBomPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-create-bom-payload.md) object

### Interfaces

#### [`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface

Represents a shared part of work-in-progress BOMs and releases of BOMs.

```graphql
type BomWip implements Bom {
  bomId: String!
  costedBoms(
    after: String
    before: String
    first: Int
    last: Int
  ): BomCostedBomsConnection
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

Identifier of the BOM.

#### `costedBoms` · [`BomCostedBomsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-costed-boms-connection.md) object

A collection of all costed BOMs created from this BOM.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Timestamp of the BOM creation.

#### `healthChecks` · [`[BomHealthCheck!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object

Effective health checks applicable to this BOM.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the BOM.

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
