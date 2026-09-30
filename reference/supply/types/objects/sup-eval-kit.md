---
title: "SupEvalKit"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKit

### Common Data Model

- [Evaluation Kit](https://altiumdeveloper.github.io/cdm/classes/sup_EvalKit/)
  - GRID: `grid:supply::platform:eval-kit/{id}`

### Returned By

[`supEvalKitById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-by-id.md) query · [`supEvalKits`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kits.md) query · [`supEvalKitsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kits-by-ids.md) query

### Member Of

[`SupEvalKitConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-connection.md) object · [`SupEvalKitEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-edge.md) object · [`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateCompatibleEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-compatible-eval-kit.md) object

```graphql
type SupEvalKit {
  bestPreviewImage: SupImage
  compatibleSoftwareProjectData(
    after: String
    before: String
    first: Int
    last: Int
    order: [SupSoftwareProjectSortInput!]
    where: SupEvalKitCompatibleSoftwareProjectFilterInput
  ): SupEvalKitCompatibleSoftwareProjectConnection @deprecated
  compatibleSoftwareProjectDetails(
    after: String
    before: String
    first: Int
    last: Int
    order: [SupSoftwareProjectSortInput!]
    where: SupEvalKitCompatibleSoftwareProjectFilterInput
  ): SupEvalKitCompatibleSoftwareProjectConnection
  compatibleSoftwareProjectIds(
    limit: Int! = 100
    start: Int! = 0
  ): [ID!]! @deprecated
  compatibleSoftwareProjects(
    limit: Int! = 100
    start: Int! = 0
  ): [SupSoftwareProject!]! @deprecated
  createdAt: DateTime!
  description: String
  devices: [SupEvalKitDevice!]!
  esdSource: SupEvalKitESDSource
  id: ID!
  mainRefDesign: SupRefDesign
  mainRefDesignId: String @deprecated
  parameters: [SupEvalKitParameter!]
  partIds: [String!]! @deprecated
  previewImages: [SupImage!]
  publisherId: String!
  refDesignIds: [String!]! @deprecated
  refDesigns: [SupRefDesign!]!
  sourceUrl: String
  title: String!
  updatedAt: DateTime!
  updatedById: String
  updatedByName: String
}
```

### Fields

#### `SupEvalKit.bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) object supply

The best evaluation kit images.

#### `SupEvalKit.compatibleSoftwareProjectDetails` · [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-connection.md) object supply

The compatible software projects of evaluation kit.

##### `SupEvalKit.compatibleSoftwareProjectDetails.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `SupEvalKit.compatibleSoftwareProjectDetails.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `SupEvalKit.compatibleSoftwareProjectDetails.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `SupEvalKit.compatibleSoftwareProjectDetails.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `SupEvalKit.compatibleSoftwareProjectDetails.order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-sort-input.md) list input supply

##### `SupEvalKit.compatibleSoftwareProjectDetails.where` · [`SupEvalKitCompatibleSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-compatible-software-project-filter-input.md) input supply

#### `SupEvalKit.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The creation date.

#### `SupEvalKit.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The detailed description.

#### `SupEvalKit.devices` · [`[SupEvalKitDevice!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-device.md) non-null object supply

The list of devices associated with the evaluation kit.

#### `SupEvalKit.esdSource` · [`SupEvalKitESDSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-esdsource.md) object supply

The esd source.

#### `SupEvalKit.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The evaluation kit identifier.

#### `SupEvalKit.mainRefDesign` · [`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object supply

The main reference design associated with the evaluation kit.

#### `SupEvalKit.parameters` · [`[SupEvalKitParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-parameter.md) list object supply

The list of parameters associated with the evaluation kit.

#### `SupEvalKit.previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) list object supply

The list of evaluation kit images.

#### `SupEvalKit.publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The publisher identifier.

#### `SupEvalKit.refDesigns` · [`[SupRefDesign!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) non-null object supply

The list of reference designs associated with the evaluation kit.

#### `SupEvalKit.sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The source url.

#### `SupEvalKit.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The evaluation kit title.

#### `SupEvalKit.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last updated date.

#### `SupEvalKit.updatedById` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The user id who last updated the evaluation kit.

#### `SupEvalKit.updatedByName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The user name who last updated the evaluation kit.

#### Deprecated

#### `SupEvalKit.compatibleSoftwareProjectData` · [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-connection.md) **DEPRECATED** object supply

> **Deprecated:** Use 'compatibleSoftwareProjectDetails' instead.

The compatible software projects of evaluation kit.

##### `SupEvalKit.compatibleSoftwareProjectData.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `SupEvalKit.compatibleSoftwareProjectData.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `SupEvalKit.compatibleSoftwareProjectData.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `SupEvalKit.compatibleSoftwareProjectData.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `SupEvalKit.compatibleSoftwareProjectData.order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-sort-input.md) list input supply

##### `SupEvalKit.compatibleSoftwareProjectData.where` · [`SupEvalKitCompatibleSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-compatible-software-project-filter-input.md) input supply

#### `SupEvalKit.compatibleSoftwareProjectIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of compatible software project identifiers associated with the evaluation kit.

##### `SupEvalKit.compatibleSoftwareProjectIds.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

##### `SupEvalKit.compatibleSoftwareProjectIds.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `SupEvalKit.compatibleSoftwareProjects` · [`[SupSoftwareProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) **DEPRECATED** non-null object supply

> **Deprecated:** Use 'compatibleSoftwareProjectDetails' instead.

The list of compatible software projects associated with the evaluation kit.

##### `SupEvalKit.compatibleSoftwareProjects.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

##### `SupEvalKit.compatibleSoftwareProjects.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `SupEvalKit.mainRefDesignId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The main reference design identifier associated with the evaluation kit.

#### `SupEvalKit.partIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of part identifiers associated with the evaluation kit.

#### `SupEvalKit.refDesignIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of reference design identifiers associated with the evaluation kit.
