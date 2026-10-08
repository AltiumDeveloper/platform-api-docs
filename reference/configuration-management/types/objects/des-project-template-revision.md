---
title: "DesProjectTemplateRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-revision"
bounded_context: "Configuration Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectTemplateRevision

Project template revision information.

### Common Data Model

- [Project Template Revision](https://w3id.org/altium/cdm/design/ProjectTemplateRevision) — An immutable revision of a project template.

  - IRI: [`https://w3id.org/altium/cdm/design/ProjectTemplateRevision`](https://w3id.org/altium/cdm/design/ProjectTemplateRevision)
  - GRID: `grid:workspace:{workspace-id}:design:project-template-revision/{id}`

### Returned By

[`desProjectTemplateRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-revision-by-id.md) query

### Member Of

[`DesProjectTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesProjectTemplateRevision implements Node {
  comment: String!
  createdAt: DateTime!
  description: String!
  downloadableFile: DesDownloadableFile!
  id: ID!
  name: String!
}
```

### Fields

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Project template revision comment.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Creation date for project template revision.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Project template revision description.

#### `downloadableFile` · [`DesDownloadableFile!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object Design

Project template revision downloadable file.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Project template revision identifier.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Project template revision name.
