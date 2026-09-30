---
title: "SftSoftwareCreateProjectInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-software-create-project-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftSoftwareCreateProjectInput

### Member Of

[`sftSoftwareCreateProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-software-create-project.md) mutation

```graphql
input SftSoftwareCreateProjectInput {
  customProperties: [SftSoftwareProjectCustomPropertyInput!]
  description: String
  folderId: String!
  name: String!
  repositoryType: SftSoftwareRepositoryType
  url: String
}
```

### Fields

#### `SftSoftwareCreateProjectInput.customProperties` · [`[SftSoftwareProjectCustomPropertyInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-software-project-custom-property-input.md) list input renesas-preview

#### `SftSoftwareCreateProjectInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SftSoftwareCreateProjectInput.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftSoftwareCreateProjectInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftSoftwareCreateProjectInput.repositoryType` · [`SftSoftwareRepositoryType`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/sft-software-repository-type.md) enum renesas-preview

#### `SftSoftwareCreateProjectInput.url` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
