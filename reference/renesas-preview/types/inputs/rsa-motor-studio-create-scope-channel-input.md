---
title: "RsaMotorStudioCreateScopeChannelInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-scope-channel-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioCreateScopeChannelInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RsaMotorStudioCreateScopeConfigInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-scope-config-input.md) input

```graphql
input RsaMotorStudioCreateScopeChannelInput {
  color: String!
  index: Int!
  offset: Float
  scale: Float
  variableName: String
}
```

### Fields

#### `RsaMotorStudioCreateScopeChannelInput.color` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RsaMotorStudioCreateScopeChannelInput.index` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `RsaMotorStudioCreateScopeChannelInput.offset` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

#### `RsaMotorStudioCreateScopeChannelInput.scale` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

#### `RsaMotorStudioCreateScopeChannelInput.variableName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
