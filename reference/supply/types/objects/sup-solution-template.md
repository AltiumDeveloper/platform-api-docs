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

- [Solution Template](https://w3id.org/altium/cdm/supply/SolutionTemplate) — A publisher's template for a solution, held in the supply catalog. It brings together catalog software projects, evaluation kits and a system design (ESD) source, and users can clone it.

  - IRI: [`https://w3id.org/altium/cdm/supply/SolutionTemplate`](https://w3id.org/altium/cdm/supply/SolutionTemplate)
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

#### `aiModelIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The list of AI model identifiers associated with the solution template.

#### `applicationIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of application identifiers associated with the solution template.

#### `bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) object

The list of solution template images.

#### `compatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKit!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-compatible-eval-kit.md) non-null object

The list of evaluation kit parameter bundles associated with the solution template.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The detailed description.

#### `esdSource` · [`SupSolutionTemplateESDSource!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-esdsource.md) non-null object

The esd source.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template identifier.

#### `keyFeatureGroups` · [`[SupSolutionTemplateKeyFeatureGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-key-feature-group.md) non-null object

The list of key features group associated with the solution template.

#### `parameters` · [`[SupSolutionTemplateParameterBundle!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-bundle.md) non-null object

The list of parameter bundles associated with the solution template.

#### `previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) list object

The list of solution template images.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `refDesigns` · [`[SupRefDesign!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) non-null object

The list of reference designs associated with the solution template.

#### `releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The optional release date.

#### `requirementTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The default requirement string used when a user first clones the solution template.

#### `softwareProjects` · [`[SupSoftwareProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) non-null object

The software projects associated with the solution template.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The solution source url.

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template stable name identifier.

#### `status` · [`SupSolutionTemplateStatus!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) non-null enum

The solution template status.

#### `tags` · [`[SupSolutionTemplateTag]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-tag.md) list object

Tags categorizing the solution template for search and organization.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template title.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### `updatedById` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The user id who last updated the solution template.

#### `updatedByName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The user name who last updated the solution template.

#### Deprecated

#### `evalKitIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use 'compatibleEvalKits' instead

The list of part identifiers associated with the solution template.

#### `evalKits` · [`[SupEvalKit!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) **DEPRECATED** non-null object

> **Deprecated:** Use 'compatibleEvalKits' instead

The list of evaluation kits associated with the solution template.

##### `id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

#### `refDesignIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of reference design identifiers associated with the solution template.

#### `softwareProjectIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The software project identifiers associated with the solution template.

#### `solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'sourceUrl' instead.

The solution source url.
