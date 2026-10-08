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

- [Component Template Revision](https://w3id.org/altium/cdm/library/ComponentTemplateRevision) — A revision of a Component Template: the template definition, stored as a \*.CMPT document, saved into the Workspace at one point in time. A component revision can be linked to a specific template revision, from which it takes its predefined parameters, models and settings.

  - IRI: [`https://w3id.org/altium/cdm/library/ComponentTemplateRevision`](https://w3id.org/altium/cdm/library/ComponentTemplateRevision)
  - GRID: `grid:workspace:{workspace-id}:library:component-template-revision/{id}`

### Returned By

[`desComponentTemplateRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-revision-by-id.md) query

### Member Of

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object · [`DesComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

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

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Component template revision comment.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Creation date for component template revision.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Component template revision description.

#### `downloadableFile` · [`DesDownloadableFile!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object Design

Component template revision downloadable file.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Component template revision identifier.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Component template revision name.
