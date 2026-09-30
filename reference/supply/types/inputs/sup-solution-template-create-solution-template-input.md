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

#### `SupSolutionTemplateCreateSolutionTemplateInput.applicationIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

The list of application identifiers associated with the solution template.

#### `SupSolutionTemplateCreateSolutionTemplateInput.compatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input.md) list input supply

The list of evaluation kit associated with the solution template.

#### `SupSolutionTemplateCreateSolutionTemplateInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The solution template description.

#### `SupSolutionTemplateCreateSolutionTemplateInput.esdSource` · [`SupSolutionTemplateEsdSourceInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-esd-source-input.md) non-null input supply

The ESD source.

#### `SupSolutionTemplateCreateSolutionTemplateInput.parameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) list input supply

The list of parameters associated with the solution template application.

#### `SupSolutionTemplateCreateSolutionTemplateInput.previewImages` · [`[SupSolutionTemplateFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) non-null input supply

The list of solution template images input. The first image will be the best preview image.

#### `SupSolutionTemplateCreateSolutionTemplateInput.publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The publisher identifier.

#### `SupSolutionTemplateCreateSolutionTemplateInput.releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The optional release date of the solution template.

#### `SupSolutionTemplateCreateSolutionTemplateInput.requirementTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The default requirement string used when a user first clones the solution template.

#### `SupSolutionTemplateCreateSolutionTemplateInput.sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The source URL where the solution template is published.

#### `SupSolutionTemplateCreateSolutionTemplateInput.stableName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The solution template stable name identifier.

#### `SupSolutionTemplateCreateSolutionTemplateInput.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The solution template title.

#### Deprecated

#### `SupSolutionTemplateCreateSolutionTemplateInput.softwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar common

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

The list of software project identifiers associated with the solution template.

#### `SupSolutionTemplateCreateSolutionTemplateInput.solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use 'sourceUrl' instead.

The source URL where the solution template is published.
