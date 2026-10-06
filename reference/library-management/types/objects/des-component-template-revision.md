---
title: "DesComponentTemplateRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-revision"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentTemplateRevision

Component template revision information.

### Common Data Model

- [Component Template Revision](https://altiumdeveloper.github.io/cdm/classes/lib_ComponentTemplateRevision/) — A revision of a Component Template: the template definition, stored as a \*.CMPT document, saved into the Workspace at one point in time. A component revision can be linked to a specific template revision, from which it takes its predefined parameters, models and settings.
  - GRID: `grid:workspace:{workspace-id}:library:component-template-revision/{id}`

### Returned By

[`desComponentTemplateRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-revision-by-id.md) query

### Member Of

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object · [`DesComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesComponentTemplateRevision implements Node {
  comment: String!
  createdAt: DateTime!
  description: String!
  downloadableFile: DesDownloadableFile!
  id: ID!
  name: String!
}
```

### Fields

#### `DesComponentTemplateRevision.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Component template revision comment.

#### `DesComponentTemplateRevision.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

Creation date for component template revision.

#### `DesComponentTemplateRevision.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Component template revision description.

#### `DesComponentTemplateRevision.downloadableFile` · [`DesDownloadableFile!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

Component template revision downloadable file.

#### `DesComponentTemplateRevision.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Component template revision identifier.

#### `DesComponentTemplateRevision.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Component template revision name.
