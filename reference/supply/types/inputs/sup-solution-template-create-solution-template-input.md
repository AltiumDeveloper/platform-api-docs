---
title: "SupSolutionTemplateCreateSolutionTemplateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-solution-template-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateSolutionTemplateInput

Input for solution template creation.

### Member Of

[`supSolutionTemplateCreateSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-create-solution-template.md) mutation

```graphql
input SupSolutionTemplateCreateSolutionTemplateInput {
  applicationIds: [String!]
  compatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitInput!]
  description: String
  esdSource: SupSolutionTemplateEsdSourceInput!
  parameters: [SupSolutionTemplateParameterBundleInput!]
  previewImages: [SupSolutionTemplateFileInput!]!
  publisherId: String!
  releaseDate: DateTime
  requirementTemplate: String
  softwareProjectIds: [ID!] @deprecated
  solutionSourceUrl: String @deprecated
  sourceUrl: String
  stableName: String!
  title: String!
}
```

### Fields

#### `applicationIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The list of application identifiers associated with the solution template.

#### `compatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input.md) list input

The list of evaluation kit associated with the solution template.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The solution template description.

#### `esdSource` · [`SupSolutionTemplateEsdSourceInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-esd-source-input.md) non-null input

The ESD source.

#### `parameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) list input

The list of parameters associated with the solution template application.

#### `previewImages` · [`[SupSolutionTemplateFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) non-null input

The list of solution template images input. The first image will be the best preview image.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The optional release date of the solution template.

#### `requirementTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The default requirement string used when a user first clones the solution template.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The source URL where the solution template is published.

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template stable name identifier.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template title.

#### Deprecated

#### `softwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

The list of software project identifiers associated with the solution template.

#### `solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'sourceUrl' instead.

The source URL where the solution template is published.
