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

- [Evaluation Kit](https://w3id.org/altium/cdm/supply/EvalKit) — A vendor evaluation kit in the supply catalog, described by its associated devices, its reference designs (including a main one) and the software projects compatible with it. In Renesas 365 an eval kit can be linked to a solution, and the browser can connect to the kit over J-Link.

  - IRI: [`https://w3id.org/altium/cdm/supply/EvalKit`](https://w3id.org/altium/cdm/supply/EvalKit)
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

#### `bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) object

The best evaluation kit images.

#### `compatibleSoftwareProjectDetails` · [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-connection.md) object

The compatible software projects of evaluation kit.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-sort-input.md) list input

##### `where` · [`SupEvalKitCompatibleSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-compatible-software-project-filter-input.md) input

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The detailed description.

#### `devices` · [`[SupEvalKitDevice!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-device.md) non-null object

The list of devices associated with the evaluation kit.

#### `esdSource` · [`SupEvalKitESDSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-esdsource.md) object

The esd source.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `mainRefDesign` · [`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object

The main reference design associated with the evaluation kit.

#### `parameters` · [`[SupEvalKitParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-parameter.md) list object

The list of parameters associated with the evaluation kit.

#### `previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) list object

The list of evaluation kit images.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `refDesigns` · [`[SupRefDesign!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) non-null object

The list of reference designs associated with the evaluation kit.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The source url.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The evaluation kit title.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### `updatedById` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The user id who last updated the evaluation kit.

#### `updatedByName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The user name who last updated the evaluation kit.

#### Deprecated

#### `compatibleSoftwareProjectData` · [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-connection.md) **DEPRECATED** object

> **Deprecated:** Use 'compatibleSoftwareProjectDetails' instead.

The compatible software projects of evaluation kit.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-sort-input.md) list input

##### `where` · [`SupEvalKitCompatibleSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-compatible-software-project-filter-input.md) input

#### `compatibleSoftwareProjectIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of compatible software project identifiers associated with the evaluation kit.

##### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `compatibleSoftwareProjects` · [`[SupSoftwareProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) **DEPRECATED** non-null object

> **Deprecated:** Use 'compatibleSoftwareProjectDetails' instead.

The list of compatible software projects associated with the evaluation kit.

##### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `mainRefDesignId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The main reference design identifier associated with the evaluation kit.

#### `partIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of part identifiers associated with the evaluation kit.

#### `refDesignIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of reference design identifiers associated with the evaluation kit.
