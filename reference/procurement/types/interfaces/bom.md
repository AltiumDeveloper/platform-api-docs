---
title: "Bom"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom"
bounded_context: "Procurement"
kind: "interfaces"
experimental: false
deprecated: false
---

# Bom

Represents a shared part of work-in-progress BOMs and releases of BOMs.

### Returned By

[`bomBomById`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/queries/bom-bom-by-id.md) query

### Implemented By

[`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

```graphql
interface Bom {
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
  settings: BomSettings!
  sources: [BomSource!]!
}
```

### Fields

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

#### `settings` · [`BomSettings!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings.md) non-null object

Settings of the BOM (e.g., currency, production quantity, etc.).

#### `sources` · [`[BomSource!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-source.md) non-null interface

Sources of the BOM (e.g., a file, a design, or other BOMs).
