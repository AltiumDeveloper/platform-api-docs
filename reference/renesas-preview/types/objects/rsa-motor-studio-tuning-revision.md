---
title: "RsaMotorStudioTuningRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-revision"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioTuningRevision

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`rsaMotorStudioTuningRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-tuning-revision-by-id.md) query · [`rsaMotorStudioTuningRevisionsByTuningId`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-tuning-revisions-by-tuning-id.md) query

### Member Of

[`RsaMotorStudioCreateTuningRevisionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-create-tuning-revision-payload.md) object · [`RsaMotorStudioTuning`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning.md) object

```graphql
type RsaMotorStudioTuningRevision {
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID!
  id: ID!
  modules: [RsaMotorStudioTuningModule!]!
  resultParameters: [RsaMotorStudioVariableSetEntry!]!
  revision: Int!
  tuning: RsaMotorStudioTuning
  tuningId: ID!
}
```

### Fields

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `modules` · [`[RsaMotorStudioTuningModule!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-module.md) non-null object

#### `resultParameters` · [`[RsaMotorStudioVariableSetEntry!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set-entry.md) non-null object

#### `revision` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `tuning` · [`RsaMotorStudioTuning`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning.md) object

#### `tuningId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
