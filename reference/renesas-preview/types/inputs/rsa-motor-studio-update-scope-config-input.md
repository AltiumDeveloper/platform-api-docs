---
title: "RsaMotorStudioUpdateScopeConfigInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-update-scope-config-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioUpdateScopeConfigInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioUpdateScopeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-update-scope-config.md) mutation

```graphql
input RsaMotorStudioUpdateScopeConfigInput {
  channels: [RsaMotorStudioScopeChannelInput!]!
  configId: String!
  description: String
  name: String!
  preTriggerSamples: Int!
  projectId: ID!
  samplePeriodNs: Int!
  samplesLength: Int!
  triggerEdge: TriggerEdge!
  triggerLevel: Float!
  triggerMode: TriggerMode!
  triggerSourceChannelIndex: Int!
  views: [RsaMotorStudioUpdateScopeViewInput!]!
  virtualVariables: [String!]
}
```

### Fields

#### `RsaMotorStudioUpdateScopeConfigInput.channels` · [`[RsaMotorStudioScopeChannelInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-scope-channel-input.md) non-null input renesas-preview

#### `RsaMotorStudioUpdateScopeConfigInput.configId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.preTriggerSamples` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.samplePeriodNs` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.samplesLength` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.triggerEdge` · [`TriggerEdge!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/trigger-edge.md) non-null enum renesas-preview

#### `RsaMotorStudioUpdateScopeConfigInput.triggerLevel` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.triggerMode` · [`TriggerMode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/trigger-mode.md) non-null enum renesas-preview

#### `RsaMotorStudioUpdateScopeConfigInput.triggerSourceChannelIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioUpdateScopeConfigInput.views` · [`[RsaMotorStudioUpdateScopeViewInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-update-scope-view-input.md) non-null input renesas-preview

#### `RsaMotorStudioUpdateScopeConfigInput.virtualVariables` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common
