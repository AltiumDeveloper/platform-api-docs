---
title: "RsaMotorStudioScopeCapture"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-capture"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioScopeCapture

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`rsaMotorStudioScopeCaptureById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-capture-by-id.md) query · [`rsaMotorStudioScopeCaptures`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-captures.md) query

### Member Of

[`RsaMotorStudioCreateScopeCapturePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-create-scope-capture-payload.md) object · [`RsaMotorStudioProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project.md) object · [`RsaMotorStudioTuningParameterEvidence`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-parameter-evidence.md) object

```graphql
type RsaMotorStudioScopeCapture {
  capturedAt: DateTime!
  capturedData: String!
  capturedDataUrl: String!
  captureId: String!
  createdBy: DesWorkspaceUser!
  createdById: ID!
  projectId: ID!
  scopeConfigId: String!
}
```

### Fields

#### `capturedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `capturedData` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `capturedDataUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `captureId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `scopeConfigId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
