---
title: "RsaMotorStudioVariableSetRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set-revision"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioVariableSetRevision

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RsaMotorStudioCreateVariableSetRevisionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-create-variable-set-revision-payload.md) object · [`RsaMotorStudioVariableSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set.md) object

```graphql
type RsaMotorStudioVariableSetRevision {
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID!
  entries: [RsaMotorStudioVariableSetEntry!]!
  projectId: ID!
  revision: Int!
  revisionId: String!
  variableSet: RsaMotorStudioVariableSet
  variableSetId: String!
}
```

### Fields

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `entries` · [`[RsaMotorStudioVariableSetEntry!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set-entry.md) non-null object

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `revision` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `variableSet` · [`RsaMotorStudioVariableSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set.md) object

#### `variableSetId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
