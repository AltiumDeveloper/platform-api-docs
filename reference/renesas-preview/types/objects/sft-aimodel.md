---
title: "SftAIModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftAIModel

### Returned By

[`sftAIModelById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-aimodel-by-id.md) query · [`sftAIModels`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-aimodels.md) query · [`sftAIModelsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-aimodels-by-ids.md) query

### Member Of

[`SftAIModelCreatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel-create-payload.md) object · [`SftAIModelUpdatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel-update-payload.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object

```graphql
type SftAIModel {
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  customProperties: [SftAIModelCustomProperty!]!
  description: String
  folderId: String!
  id: ID!
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  name: String!
  owner: DesWorkspaceUser
  permissions: [DesPermission!]
  previewUrl: String!
  url: String
}
```

### Fields

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `customProperties` · [`[SftAIModelCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel-custom-property.md) non-null object

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

Ai model's owner.

#### `permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface Platform

Collection of the Ai model's permissions.

#### `previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `url` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
