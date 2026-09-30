---
title: "DesProjectTemplate"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template"
bounded_context: "Configuration Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectTemplate

Information about a project template.

### Common Data Model

- [Project Template](https://altiumdeveloper.github.io/cdm/classes/des_ProjectTemplate/) — A project template includes document configurations and settings that you know you will frequently apply to various projects.
  - GRID: `grid:workspace:{workspace-id}:design:project-template/{id}`

### Returned By

[`desProjectTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-by-id.md) query

### Member Of

[`DesProjectTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-connection.md) object · [`DesProjectTemplateEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesProjectTemplate implements Node {
  description: String!
  folder: DesFolder
  id: ID!
  latestRevision: DesProjectTemplateRevision!
  name: String!
}
```

### Fields

#### `DesProjectTemplate.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Project template description.

#### `DesProjectTemplate.folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

Project template folder.

#### `DesProjectTemplate.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier (used by `desProjectTemplateById`).

#### `DesProjectTemplate.latestRevision` · [`DesProjectTemplateRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-revision.md) non-null object configuration-management

Project template latest revision.

#### `DesProjectTemplate.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Project template name.
