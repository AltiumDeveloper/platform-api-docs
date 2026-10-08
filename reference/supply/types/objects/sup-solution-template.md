---
title: "SupSolutionTemplate"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplate

### Common Data Model

- [Solution Template](https://altiumdeveloper.github.io/cdm/classes/sup_SolutionTemplate/) — A publisher's template for a solution, held in the supply catalog. It brings together catalog software projects, evaluation kits and a system design (ESD) source, and users can clone it.
  - GRID: `grid:supply::platform:solution-template/{id}`

### Returned By

[`supSolutionTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-by-id.md) query · [`supSolutionTemplateByName`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-by-name.md) query · [`supSolutionTemplates`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-templates.md) query · [`supSolutionTemplatesByApplicationId`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-templates-by-application-id.md) query · [`supSolutionTemplatesByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-templates-by-ids.md) query

### Member Of

[`SupSolutionTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-connection.md) object · [`SupSolutionTemplateEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-edge.md) object

### Implemented By

[`SupSolutionTemplateRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-ref-design.md) union

```graphql
type SupSolutionTemplate {
  aiModelIds: [String!]
  applicationIds: [String!]!
  bestPreviewImage: SupImage
  compatibleEvalKits: [SupSolutionTemplateCompatibleEvalKit!]!
  createdAt: DateTime!
  description: String
  esdSource: SupSolutionTemplateESDSource!
  evalKitIds: [ID!]! @deprecated
  evalKits(
    id: ID
  ): [SupEvalKit!]! @deprecated
  id: ID!
  keyFeatureGroups: [SupSolutionTemplateKeyFeatureGroup!]!
  parameters: [SupSolutionTemplateParameterBundle!]!
  previewImages: [SupImage!]
  publisherId: String!
  refDesignIds: [String!]! @deprecated
  refDesigns: [SupRefDesign!]!
  releaseDate: DateTime
  requirementTemplate: String
  softwareProjectIds: [ID!]! @deprecated
  softwareProjects: [SupSoftwareProject!]!
  solutionSourceUrl: String @deprecated
  sourceUrl: String
  stableName: String!
  status: SupSolutionTemplateStatus!
  tags: [SupSolutionTemplateTag]
  title: String!
  updatedAt: DateTime!
  updatedById: String
  updatedByName: String
}
```

### Fields

#### `SupSolutionTemplate.aiModelIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

The list of AI model identifiers associated with the solution template.

#### `SupSolutionTemplate.applicationIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The list of application identifiers associated with the solution template.

#### `SupSolutionTemplate.bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) object supply

The list of solution template images.

#### `SupSolutionTemplate.compatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKit!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-compatible-eval-kit.md) non-null object supply

The list of evaluation kit parameter bundles associated with the solution template.

#### `SupSolutionTemplate.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The creation date.

#### `SupSolutionTemplate.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The detailed description.

#### `SupSolutionTemplate.esdSource` · [`SupSolutionTemplateESDSource!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-esdsource.md) non-null object supply

The esd source.

#### `SupSolutionTemplate.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The solution template identifier.

#### `SupSolutionTemplate.keyFeatureGroups` · [`[SupSolutionTemplateKeyFeatureGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-key-feature-group.md) non-null object supply

The list of key features group associated with the solution template.

#### `SupSolutionTemplate.parameters` · [`[SupSolutionTemplateParameterBundle!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-bundle.md) non-null object supply

The list of parameter bundles associated with the solution template.

#### `SupSolutionTemplate.previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) list object supply

The list of solution template images.

#### `SupSolutionTemplate.publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The publisher identifier.

#### `SupSolutionTemplate.refDesigns` · [`[SupRefDesign!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) non-null object supply

The list of reference designs associated with the solution template.

#### `SupSolutionTemplate.releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The optional release date.

#### `SupSolutionTemplate.requirementTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The default requirement string used when a user first clones the solution template.

#### `SupSolutionTemplate.softwareProjects` · [`[SupSoftwareProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) non-null object supply

The software projects associated with the solution template.

#### `SupSolutionTemplate.sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The solution source url.

#### `SupSolutionTemplate.stableName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The solution template stable name identifier.

#### `SupSolutionTemplate.status` · [`SupSolutionTemplateStatus!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) non-null enum supply

The solution template status.

#### `SupSolutionTemplate.tags` · [`[SupSolutionTemplateTag]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-tag.md) list object supply

Tags categorizing the solution template for search and organization.

#### `SupSolutionTemplate.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The solution template title.

#### `SupSolutionTemplate.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last updated date.

#### `SupSolutionTemplate.updatedById` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The user id who last updated the solution template.

#### `SupSolutionTemplate.updatedByName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The user name who last updated the solution template.

#### Deprecated

#### `SupSolutionTemplate.evalKitIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use 'compatibleEvalKits' instead

The list of part identifiers associated with the solution template.

#### `SupSolutionTemplate.evalKits` · [`[SupEvalKit!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) **DEPRECATED** non-null object supply

> **Deprecated:** Use 'compatibleEvalKits' instead

The list of evaluation kits associated with the solution template.

##### `SupSolutionTemplate.evalKits.id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `SupSolutionTemplate.refDesignIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of reference design identifiers associated with the solution template.

#### `SupSolutionTemplate.softwareProjectIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The software project identifiers associated with the solution template.

#### `SupSolutionTemplate.solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use 'sourceUrl' instead.

The solution source url.
