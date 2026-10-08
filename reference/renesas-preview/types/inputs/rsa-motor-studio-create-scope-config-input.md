---
title: "RsaMotorStudioCreateScopeConfigInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-scope-config-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioCreateScopeConfigInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioCreateScopeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-create-scope-config.md) mutation

```graphql
input RsaMotorStudioCreateScopeConfigInput {
  channels: [RsaMotorStudioCreateScopeChannelInput!]!
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
  views: [RsaMotorStudioCreateScopeViewInput!]!
  virtualVariables: [String!]
}
```

### Fields

#### `channels` · [`[RsaMotorStudioCreateScopeChannelInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-scope-channel-input.md) non-null input

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `preTriggerSamples` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `samplePeriodNs` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `samplesLength` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `triggerEdge` · [`TriggerEdge!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/trigger-edge.md) non-null enum

#### `triggerLevel` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

#### `triggerMode` · [`TriggerMode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/trigger-mode.md) non-null enum

#### `triggerSourceChannelIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `views` · [`[RsaMotorStudioCreateScopeViewInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-scope-view-input.md) non-null input

#### `virtualVariables` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar
