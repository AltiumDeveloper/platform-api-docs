---
title: "SupSolutionTemplateUpdateSolutionTemplateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateUpdateSolutionTemplateInput

Input for solution template update.

### Member Of

[`supSolutionTemplateUpdateSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-update-solution-template.md) mutation

```graphql
input SupSolutionTemplateUpdateSolutionTemplateInput {
  addApplicationIds: [String!]
  addSoftwareProjectIds: [ID!] @deprecated
  description: String
  id: ID!
  newCompatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitInput!] @deprecated
  newEsdSource: SupSolutionTemplatePatchEsdSourceInput @deprecated
  newParameters: [SupSolutionTemplateParameterBundleInput!] @deprecated
  newPreviewImages: [SupSolutionTemplateFileInput!] @deprecated
  publisherId: String
  releaseDate: DateTime
  removeApplicationIds: [String!]
  removeSoftwareProjectIds: [ID!] @deprecated
  requirementTemplate: String
  solutionSourceUrl: String @deprecated
  sourceUrl: String
  stableName: String
  status: SupSolutionTemplateStatus
  title: String
}
```

### Fields

#### `SupSolutionTemplateUpdateSolutionTemplateInput.addApplicationIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Remove list of application identifiers associated with the solution template.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The solution template description.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SupSolutionTemplateUpdateSolutionTemplateInput.publisherId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The publisher identifier.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The optional release date of the solution template.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.removeApplicationIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Remove list of application identifiers associated with the solution template.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.requirementTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The default requirement string used when a user first clones the solution template.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The source URL where the solution template is published.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.stableName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The solution template stable name identifier.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.status` · [`SupSolutionTemplateStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) enum supply

The solution template status.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The solution template title.

#### Deprecated

#### `SupSolutionTemplateUpdateSolutionTemplateInput.addSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar common

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

Add list of software project identifiers associated with the solution template.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.newCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input.md) **DEPRECATED** list input supply

> **Deprecated:** Use the SupSolutionTemplateSetCompatibleEvalKits/SupSolutionTemplatePatchCompatibleEvalKits mutations instead.

Replace the current solution template compatible eval kits with these ones.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.newEsdSource` · [`SupSolutionTemplatePatchEsdSourceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-esd-source-input.md) **DEPRECATED** input supply

> **Deprecated:** Use the SupSolutionTemplatePatchEsdSource mutation instead.

The ESD source.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.newParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) **DEPRECATED** list input supply

> **Deprecated:** Use the SupSolutionTemplateSetParameters/SupSolutionTemplatePatchParameters mutations instead.

Replace the current solution template parameters with these ones.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.newPreviewImages` · [`[SupSolutionTemplateFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) **DEPRECATED** list input supply

> **Deprecated:** Use the SupSolutionTemplateSetPreviewImages/SupSolutionTemplatePatchPreviewImages mutations instead.

Replace the current solution template preview images with these ones. The first image will be used as a best preview image.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.removeSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar common

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

Remove list of software project identifiers associated with the solution template.

#### `SupSolutionTemplateUpdateSolutionTemplateInput.solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use 'sourceUrl' instead.

The source URL where the solution template is published.
