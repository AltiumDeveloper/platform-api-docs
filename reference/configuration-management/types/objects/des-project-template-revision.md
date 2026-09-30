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

- [Project Template Revision](https://altiumdeveloper.github.io/cdm/classes/des_ProjectTemplateRevision/) — An immutable revision of a project template.
  - GRID: `grid:workspace:{workspace-id}:design:project-template-revision/{id}`

### Returned By

[`desProjectTemplateRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-revision-by-id.md) query

### Member Of

[`DesProjectTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

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

#### `DesProjectTemplateRevision.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Project template revision comment.

#### `DesProjectTemplateRevision.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

Creation date for project template revision.

#### `DesProjectTemplateRevision.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Project template revision description.

#### `DesProjectTemplateRevision.downloadableFile` · [`DesDownloadableFile!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

Project template revision downloadable file.

#### `DesProjectTemplateRevision.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Project template revision identifier.

#### `DesProjectTemplateRevision.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Project template revision name.
