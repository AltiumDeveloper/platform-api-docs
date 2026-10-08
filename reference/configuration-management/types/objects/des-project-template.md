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

- [Project Template](https://w3id.org/altium/cdm/design/ProjectTemplate) — A reusable starting point for new design projects that bundles the documents, files and project settings a team wants to apply again and again. A project created from a template receives the template's documents and its project options.

  - IRI: [`https://w3id.org/altium/cdm/design/ProjectTemplate`](https://w3id.org/altium/cdm/design/ProjectTemplate)
  - GRID: `grid:workspace:{workspace-id}:design:project-template/{id}`

### Returned By

[`desProjectTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-by-id.md) query

### Member Of

[`DesProjectTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-connection.md) object · [`DesProjectTemplateEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

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

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Project template description.

#### `folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object Platform

Project template folder.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier (used by [`desProjectTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-by-id.md)).

#### `latestRevision` · [`DesProjectTemplateRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-revision.md) non-null object

Project template latest revision.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Project template name.
