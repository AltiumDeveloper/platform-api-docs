---
title: "SupRefDesign"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesign

A reference design model aggregates the relevant documents, files and parts.

### Common Data Model

- [Reference Design](https://altiumdeveloper.github.io/cdm/classes/sup_ReferenceDesign/) — An example design published in the supply catalog, bringing together its design files (e.g. schematics and layouts), documentation and the parts it uses. In Renesas 365 a reference design can be imported into a solution, which adds it to the Workspace as a PCB project linked to that solution.
  - GRID: `grid:supply::platform:ref-design/{id}`

### Returned By

[`supRefDesignById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-design-by-id.md) query · [`supRefDesignByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/supply/operations/queries/sup-ref-design-by-ids.md) query · [`supRefDesignByName`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-design-by-name.md) query · [`supRefDesignsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-designs-by-ids.md) query

### Member Of

[`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) object · [`SupEvalKitDevice`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-device.md) object · [`SupRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-result-set.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object

### Implemented By

[`SupSolutionTemplateRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-ref-design.md) union

```graphql
type SupRefDesign {
  applicationIds: [String!]!
  bomId: String
  createdAt: DateTime!
  defaultSchematicFile: String
  description: String!
  designFiles(
    extensions: [String!]
    type: String
  ): [SupRefDesignFile]!
  documentations: [SupDocument]!
  evalKitDetails(
    after: String
    before: String
    first: Int
    last: Int
    where: SupEvalKitByRefDesignFilterInput
  ): SupEvalKitConnection
  evaluationKitIds: [String!]! @deprecated
  evaluationKits: [SupRefEvaluationKit!]
  faqs: [SupRefFaq!]!
  hasEvalBoard: Boolean!
  id: ID!
  isVerified: Boolean!
  keyFeatures: [SupRefKeyFeature]!
  parts(
    designators: [String!]
    limit: Int! = 50
    start: Int! = 0
    type: SupRefPartType
    types: [SupRefPartType]
  ): [SupRefPart]!
  previewImages: [SupImage]
  publisherId: String!
  releaseDate: DateTime
  softwares: [SupRefResource]!
  sourceUrl: String
  stableName: String!
  status: SupRefDesignStatus
  subtitle: String
  tags: [SupRefTag]
  title: String!
  type: SupRefDesignType!
  updatedAt: DateTime!
}
```

### Fields

#### `SupRefDesign.applicationIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The list of application identifiers related to the reference design.

#### `SupRefDesign.bomId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The bill of materials (BOM) identifier.

#### `SupRefDesign.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The creation date.

#### `SupRefDesign.defaultSchematicFile` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The default schematic file associated with the reference design.

#### `SupRefDesign.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The detailed description.

#### `SupRefDesign.designFiles` · [`[SupRefDesignFile]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-file.md) non-null object supply

Design files, such as schematics and layouts, for the reference design.

##### `SupRefDesign.designFiles.extensions` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

##### `SupRefDesign.designFiles.type` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SupRefDesign.documentations` · [`[SupDocument]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-document.md) non-null object supply

Documentation resources related to the reference design.

#### `SupRefDesign.evalKitDetails` · [`SupEvalKitConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-connection.md) object supply

The evaluation kits of reference design.

##### `SupRefDesign.evalKitDetails.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `SupRefDesign.evalKitDetails.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `SupRefDesign.evalKitDetails.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `SupRefDesign.evalKitDetails.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `SupRefDesign.evalKitDetails.where` · [`SupEvalKitByRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-by-ref-design-filter-input.md) input supply

#### `SupRefDesign.evaluationKits` · [`[SupRefEvaluationKit!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-evaluation-kit.md) list object supply

The list of evaluation kits associated with the reference design.

#### `SupRefDesign.faqs` · [`[SupRefFaq!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-faq.md) non-null object supply

Frequently asked questions about the reference design.

#### `SupRefDesign.hasEvalBoard` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates if an evaluation board is available.

#### `SupRefDesign.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The evaluation kit identifier.

#### `SupRefDesign.isVerified` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the reference design is verified.

#### `SupRefDesign.keyFeatures` · [`[SupRefKeyFeature]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-key-feature.md) non-null object supply

Key features highlighting the capabilities of the reference design.

#### `SupRefDesign.parts` · [`[SupRefPart]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-part.md) non-null object supply

Part identifiers of the reference design, including their designators.

##### `SupRefDesign.parts.designators` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

##### `SupRefDesign.parts.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

##### `SupRefDesign.parts.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

##### `SupRefDesign.parts.type` · [`SupRefPartType`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-part-type.md) **DEPRECATED** enum supply

> **Deprecated:** Use 'types' instead

##### `SupRefDesign.parts.types` · [`[SupRefPartType]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-part-type.md) list enum supply

#### `SupRefDesign.previewImages` · [`[SupImage]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) list object supply

Preview images that provide a visual overview of the reference design.

#### `SupRefDesign.publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The publisher identifier.

#### `SupRefDesign.releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The release date of the reference design.

#### `SupRefDesign.softwares` · [`[SupRefResource]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-resource.md) non-null object supply

Software packages and resources associated with the reference design.

#### `SupRefDesign.sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The source URL where the reference design is published.

#### `SupRefDesign.stableName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The stable name identifier.

#### `SupRefDesign.status` · [`SupRefDesignStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-status.md) enum supply

The status name.

#### `SupRefDesign.subtitle` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The subtitle providing context.

#### `SupRefDesign.tags` · [`[SupRefTag]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-tag.md) list object supply

Tags categorizing the reference design for search and organization.

#### `SupRefDesign.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference design title.

#### `SupRefDesign.type` · [`SupRefDesignType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-type.md) non-null enum supply

The type identifier of this reference design.

#### `SupRefDesign.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last updated date.

#### Deprecated

#### `SupRefDesign.evaluationKitIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use 'evaluationKits' instead.

The list of evaluation kit identifiers associated with the reference design.
