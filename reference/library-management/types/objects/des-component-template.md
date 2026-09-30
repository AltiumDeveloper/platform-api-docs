---
title: "DesComponentTemplate"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentTemplate

Information about a component template.

### Common Data Model

- [Component Template](https://altiumdeveloper.github.io/cdm/classes/lib_ComponentTemplate/) — Component Template defines a reusable blueprint for creating and managing electronic components with consistent parameters, metadata, and lifecycle policies.
  - GRID: `grid:workspace:{workspace-id}:library:component-template/{id}`

### Returned By

[`desComponentTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-by-id.md) query

### Member Of

[`DesComponentTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-connection.md) object · [`DesComponentTemplateEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesComponentTemplate implements Node {
  description: String!
  folder: DesFolder
  id: ID!
  latestRevision: DesComponentTemplateRevision!
  name: String!
}
```

### Fields

#### `DesComponentTemplate.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Component template description.

#### `DesComponentTemplate.folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

The folder containing this component template.

#### `DesComponentTemplate.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier (used by `desComponentTemplateById`).

#### `DesComponentTemplate.latestRevision` · [`DesComponentTemplateRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-revision.md) non-null object library-management

Component template latest revision.

#### `DesComponentTemplate.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Component template name.
