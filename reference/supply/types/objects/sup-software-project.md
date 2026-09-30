---
title: "SupSoftwareProject"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProject

### Common Data Model

- [Software Project](https://altiumdeveloper.github.io/cdm/classes/sup_SoftwareProject/)
  - GRID: `grid:supply::platform:software-project/{id}`

### Returned By

[`supSoftwareProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-by-id.md) query · [`supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-eval-kit-compatible-software-projects-by-eval-kit-id.md) query · [`supSoftwareProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-projects.md) query · [`supSoftwareProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-projects-by-ids.md) query · [`supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateId`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-solution-template-software-projects-by-solution-template-id.md) query

### Member Of

[`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) object · [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-connection.md) object · [`SupEvalKitCompatibleSoftwareProjectEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-edge.md) object · [`SupSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-connection.md) object · [`SupSoftwareProjectEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-edge.md) object · [`SupSoftwareProjectSolutionTemplateSoftwareProjectsResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-solution-template-software-projects-result.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object

```graphql
type SupSoftwareProject {
  bestPreviewImage: SupImage
  compatibleEvalKit(
    id: ID!
  ): SupSoftwareProjectEvalKitSource
  compatibleEvalKitData(
    after: String
    before: String
    first: Int
    last: Int
    order: [SupSoftwareProjectCompatibleEvalKitSortInput!]
    where: SupSoftwareProjectCompatibleEvalKitFilterInput
  ): SupSoftwareProjectEvalKitSourceConnection @deprecated
  compatibleEvalKitDetails(
    after: String
    before: String
    first: Int
    last: Int
    order: [SupSoftwareProjectCompatibleEvalKitSortInput!]
    where: SupSoftwareProjectCompatibleEvalKitFilterInput
  ): SupSoftwareProjectEvalKitSourceConnection
  compatibleEvalKits: [SupSoftwareProjectEvalKitSource!]
  createdAt: DateTime!
  description: String
  id: ID!
  isRecommended: Boolean!
  parameters: [SupSoftwareProjectParameter!]
  previewImages: [SupImage!]
  publisherId: String!
  recommendScore: Int!
  title: String!
  type: SupSoftwareProjectType!
  updatedAt: DateTime!
  updatedById: String
  updatedByName: String
}
```

### Fields

#### `SupSoftwareProject.bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) object supply

The best software project image.

#### `SupSoftwareProject.compatibleEvalKit` · [`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) object supply

The evaluation kit source associated with the software project.

##### `SupSoftwareProject.compatibleEvalKit.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SupSoftwareProject.compatibleEvalKitDetails` · [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-connection.md) object supply

The compatible evaluation kits of software project.

##### `SupSoftwareProject.compatibleEvalKitDetails.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `SupSoftwareProject.compatibleEvalKitDetails.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `SupSoftwareProject.compatibleEvalKitDetails.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `SupSoftwareProject.compatibleEvalKitDetails.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `SupSoftwareProject.compatibleEvalKitDetails.order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input supply

##### `SupSoftwareProject.compatibleEvalKitDetails.where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input supply

#### `SupSoftwareProject.compatibleEvalKits` · [`[SupSoftwareProjectEvalKitSource!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) list object supply

The list of evaluation kit sources associated with the software project.

#### `SupSoftwareProject.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The creation date.

#### `SupSoftwareProject.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The detailed description.

#### `SupSoftwareProject.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The software project identifier.

#### `SupSoftwareProject.isRecommended` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether the software project is recommended.

#### `SupSoftwareProject.parameters` · [`[SupSoftwareProjectParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-parameter.md) list object supply

The list of parameters associated with the software project.

#### `SupSoftwareProject.previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) list object supply

The list of software project images.

#### `SupSoftwareProject.publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The publisher identifier.

#### `SupSoftwareProject.recommendScore` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The recommendation score. Range is 0 to 65535.

#### `SupSoftwareProject.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The software project title.

#### `SupSoftwareProject.type` · [`SupSoftwareProjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) non-null enum supply

The software project type.

#### `SupSoftwareProject.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last updated date.

#### `SupSoftwareProject.updatedById` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The user id who last updated the software project.

#### `SupSoftwareProject.updatedByName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The user name who last updated the software project.

#### Deprecated

#### `SupSoftwareProject.compatibleEvalKitData` · [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-connection.md) **DEPRECATED** object supply

> **Deprecated:** Use 'compatibleEvalKitDetails' instead.

The compatible evaluation kits of software project.

##### `SupSoftwareProject.compatibleEvalKitData.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `SupSoftwareProject.compatibleEvalKitData.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `SupSoftwareProject.compatibleEvalKitData.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `SupSoftwareProject.compatibleEvalKitData.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `SupSoftwareProject.compatibleEvalKitData.order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input supply

##### `SupSoftwareProject.compatibleEvalKitData.where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input supply
