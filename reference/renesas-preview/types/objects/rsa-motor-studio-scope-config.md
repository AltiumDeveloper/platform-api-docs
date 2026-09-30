---
title: "RsaMotorStudioScopeConfig"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-config"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioScopeConfig

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`rsaMotorStudioScopeConfigById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-config-by-id.md) query · [`rsaMotorStudioScopeConfigs`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-configs.md) query

### Member Of

[`RsaMotorStudioCreateScopeConfigPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-create-scope-config-payload.md) object · [`RsaMotorStudioProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project.md) object · [`RsaMotorStudioUpdateScopeConfigPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-update-scope-config-payload.md) object

```graphql
type RsaMotorStudioScopeConfig {
  channels: [RsaMotorStudioScopeChannelConfig!]!
  configId: String!
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID!
  description: String
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID
  name: String!
  preTriggerSamples: Int!
  projectId: ID!
  samplePeriodNs: Int!
  samplesLength: Int!
  triggerEdge: TriggerEdge!
  triggerLevel: Float!
  triggerMode: TriggerMode!
  triggerSourceChannelIndex: Int!
  views: [RsaMotorStudioScopeView!]!
  virtualVariables: [String!]!
}
```

### Fields

#### `RsaMotorStudioScopeConfig.channels` · [`[RsaMotorStudioScopeChannelConfig!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-channel-config.md) non-null object renesas-preview

#### `RsaMotorStudioScopeConfig.configId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

#### `RsaMotorStudioScopeConfig.createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RsaMotorStudioScopeConfig.modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `RsaMotorStudioScopeConfig.modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

#### `RsaMotorStudioScopeConfig.modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `RsaMotorStudioScopeConfig.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.preTriggerSamples` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.samplePeriodNs` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.samplesLength` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.triggerEdge` · [`TriggerEdge!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/trigger-edge.md) non-null enum renesas-preview

#### `RsaMotorStudioScopeConfig.triggerLevel` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.triggerMode` · [`TriggerMode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/trigger-mode.md) non-null enum renesas-preview

#### `RsaMotorStudioScopeConfig.triggerSourceChannelIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioScopeConfig.views` · [`[RsaMotorStudioScopeView!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-view.md) non-null object renesas-preview

#### `RsaMotorStudioScopeConfig.virtualVariables` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
