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

- [Software Project](https://w3id.org/altium/cdm/supply/SoftwareProject) — A software project published in the supply catalog, together with the evaluation kits it is compatible with. In Renesas 365 it can be imported into a solution with a compatible eval kit; the import places the project in the Workspace and links it to the solution (see sft\_SoftwareProject).

  - IRI: [`https://w3id.org/altium/cdm/supply/SoftwareProject`](https://w3id.org/altium/cdm/supply/SoftwareProject)
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

#### `bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) object

The best software project image.

#### `compatibleEvalKit` · [`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) object

The evaluation kit source associated with the software project.

##### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `compatibleEvalKitDetails` · [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-connection.md) object

The compatible evaluation kits of software project.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input

##### `where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input

#### `compatibleEvalKits` · [`[SupSoftwareProjectEvalKitSource!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) list object

The list of evaluation kit sources associated with the software project.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The detailed description.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The software project identifier.

#### `isRecommended` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether the software project is recommended.

#### `parameters` · [`[SupSoftwareProjectParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-parameter.md) list object

The list of parameters associated with the software project.

#### `previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) list object

The list of software project images.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `recommendScore` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The recommendation score. Range is 0 to 65535.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The software project title.

#### `type` · [`SupSoftwareProjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) non-null enum

The software project type.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### `updatedById` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The user id who last updated the software project.

#### `updatedByName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The user name who last updated the software project.

#### Deprecated

#### `compatibleEvalKitData` · [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-connection.md) **DEPRECATED** object

> **Deprecated:** Use 'compatibleEvalKitDetails' instead.

The compatible evaluation kits of software project.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input

##### `where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input
