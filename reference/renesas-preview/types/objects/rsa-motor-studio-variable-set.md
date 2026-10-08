---
title: "RsaMotorStudioVariableSet"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioVariableSet

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`rsaMotorStudioVariableSetById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-variable-set-by-id.md) query · [`rsaMotorStudioVariableSets`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-variable-sets.md) query

### Member Of

[`RsaMotorStudioCreateVariableSetPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-create-variable-set-payload.md) object · [`RsaMotorStudioProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project.md) object · [`RsaMotorStudioUpdateVariableSetPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-update-variable-set-payload.md) object · [`RsaMotorStudioVariableSetRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set-revision.md) object

```graphql
type RsaMotorStudioVariableSet {
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID!
  description: String
  latestRevision: RsaMotorStudioVariableSetRevision
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID
  name: String!
  path: String!
  projectId: ID!
  revisions: [RsaMotorStudioVariableSetRevision!]!
  variableSetId: String!
}
```

### Fields

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `latestRevision` · [`RsaMotorStudioVariableSetRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set-revision.md) object

#### `modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

#### `modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `revisions` · [`[RsaMotorStudioVariableSetRevision!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set-revision.md) non-null object

#### `variableSetId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
