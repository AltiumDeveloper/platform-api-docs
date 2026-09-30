---
title: "DesReleaseComponentTemplateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-template-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesReleaseComponentTemplateInput

Input for releasing a component template.

### Member Of

[`desReleaseComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-release-component-template.md) mutation

```graphql
input DesReleaseComponentTemplateInput {
  comment: String
  contentAsText: String!
  description: String
  folder: String!
  lifeCycleDefinitionId: String
  name: String!
  parameters: [DesRevisionParameterInput!]
  revisionNamingSchemeId: String
  workspaceUrl: String
}
```

### Fields

#### `DesReleaseComponentTemplateInput.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional comment.

#### `DesReleaseComponentTemplateInput.contentAsText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The component template content (CMPT format JSON string).

#### `DesReleaseComponentTemplateInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional description.

#### `DesReleaseComponentTemplateInput.folder` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The target folder path, existing or to be created.

#### `DesReleaseComponentTemplateInput.lifeCycleDefinitionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional life cycle identifier.

#### `DesReleaseComponentTemplateInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The component template name.

#### `DesReleaseComponentTemplateInput.parameters` · [`[DesRevisionParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-revision-parameter-input.md) list input library-management

Optional parameters.

#### `DesReleaseComponentTemplateInput.revisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional naming scheme identifier.

#### `DesReleaseComponentTemplateInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The target workspace URL.
