---
title: "RsaMotorStudioCreateEasyModeConfigInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-easy-mode-config-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioCreateEasyModeConfigInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents input value for motor studio project easymode config creation.

### Member Of

[`rsaMotorStudioCreateEasyModeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-create-easy-mode-config.md) mutation

```graphql
input RsaMotorStudioCreateEasyModeConfigInput {
  path: String!
  projectId: ID!
  sliders: [RsaMotorStudioCreateSliderInput!]!
}
```

### Fields

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `sliders` · [`[RsaMotorStudioCreateSliderInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-slider-input.md) non-null input
