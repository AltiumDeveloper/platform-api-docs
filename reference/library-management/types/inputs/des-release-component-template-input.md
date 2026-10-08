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

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional comment.

#### `contentAsText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The component template content (CMPT format JSON string).

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional description.

#### `folder` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The target folder path, existing or to be created.

#### `lifeCycleDefinitionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional life cycle identifier.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The component template name.

#### `parameters` · [`[DesRevisionParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-revision-parameter-input.md) list input

Optional parameters.

#### `revisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional naming scheme identifier.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The target workspace URL.
