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

- [Reference Design](https://w3id.org/altium/cdm/supply/ReferenceDesign) — An example design published in the supply catalog, bringing together its design files (e.g. schematics and layouts), documentation and the parts it uses. In Renesas 365 a reference design can be imported into a solution, which adds it to the Workspace as a PCB project linked to that solution.

  - IRI: [`https://w3id.org/altium/cdm/supply/ReferenceDesign`](https://w3id.org/altium/cdm/supply/ReferenceDesign)
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

#### `applicationIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of application identifiers related to the reference design.

#### `bomId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The bill of materials (BOM) identifier.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `defaultSchematicFile` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The default schematic file associated with the reference design.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The detailed description.

#### `designFiles` · [`[SupRefDesignFile]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-file.md) non-null object

Design files, such as schematics and layouts, for the reference design.

##### `extensions` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

##### `type` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `documentations` · [`[SupDocument]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-document.md) non-null object

Documentation resources related to the reference design.

#### `evalKitDetails` · [`SupEvalKitConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-connection.md) object

The evaluation kits of reference design.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `where` · [`SupEvalKitByRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-by-ref-design-filter-input.md) input

#### `evaluationKits` · [`[SupRefEvaluationKit!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-evaluation-kit.md) list object

The list of evaluation kits associated with the reference design.

#### `faqs` · [`[SupRefFaq!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-faq.md) non-null object

Frequently asked questions about the reference design.

#### `hasEvalBoard` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates if an evaluation board is available.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `isVerified` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the reference design is verified.

#### `keyFeatures` · [`[SupRefKeyFeature]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-key-feature.md) non-null object

Key features highlighting the capabilities of the reference design.

#### `parts` · [`[SupRefPart]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-part.md) non-null object

Part identifiers of the reference design, including their designators.

##### `designators` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

##### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `type` · [`SupRefPartType`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-part-type.md) **DEPRECATED** enum

> **Deprecated:** Use 'types' instead

##### `types` · [`[SupRefPartType]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-part-type.md) list enum

#### `previewImages` · [`[SupImage]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-image.md) list object

Preview images that provide a visual overview of the reference design.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The release date of the reference design.

#### `softwares` · [`[SupRefResource]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-resource.md) non-null object

Software packages and resources associated with the reference design.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The source URL where the reference design is published.

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The stable name identifier.

#### `status` · [`SupRefDesignStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-status.md) enum

The status name.

#### `subtitle` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The subtitle providing context.

#### `tags` · [`[SupRefTag]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-tag.md) list object

Tags categorizing the reference design for search and organization.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference design title.

#### `type` · [`SupRefDesignType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-type.md) non-null enum

The type identifier of this reference design.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### Deprecated

#### `evaluationKitIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use 'evaluationKits' instead.

The list of evaluation kit identifiers associated with the reference design.
