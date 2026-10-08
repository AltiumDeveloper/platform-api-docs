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

#### `addApplicationIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Remove list of application identifiers associated with the solution template.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The solution template description.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `publisherId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The publisher identifier.

#### `releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The optional release date of the solution template.

#### `removeApplicationIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Remove list of application identifiers associated with the solution template.

#### `requirementTemplate` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The default requirement string used when a user first clones the solution template.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The source URL where the solution template is published.

#### `stableName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The solution template stable name identifier.

#### `status` · [`SupSolutionTemplateStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) enum

The solution template status.

#### `title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The solution template title.

#### Deprecated

#### `addSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

Add list of software project identifiers associated with the solution template.

#### `newCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-input.md) **DEPRECATED** list input

> **Deprecated:** Use the SupSolutionTemplateSetCompatibleEvalKits/SupSolutionTemplatePatchCompatibleEvalKits mutations instead.

Replace the current solution template compatible eval kits with these ones.

#### `newEsdSource` · [`SupSolutionTemplatePatchEsdSourceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-esd-source-input.md) **DEPRECATED** input

> **Deprecated:** Use the SupSolutionTemplatePatchEsdSource mutation instead.

The ESD source.

#### `newParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) **DEPRECATED** list input

> **Deprecated:** Use the SupSolutionTemplateSetParameters/SupSolutionTemplatePatchParameters mutations instead.

Replace the current solution template parameters with these ones.

#### `newPreviewImages` · [`[SupSolutionTemplateFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-file-input.md) **DEPRECATED** list input

> **Deprecated:** Use the SupSolutionTemplateSetPreviewImages/SupSolutionTemplatePatchPreviewImages mutations instead.

Replace the current solution template preview images with these ones. The first image will be used as a best preview image.

#### `removeSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

Remove list of software project identifiers associated with the solution template.

#### `solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'sourceUrl' instead.

The source URL where the solution template is published.
