---
title: "RsaMotorStudioUpdateEasyModeConfigInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-update-easy-mode-config-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioUpdateEasyModeConfigInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioUpdateEasyModeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-update-easy-mode-config.md) mutation

```graphql
input RsaMotorStudioUpdateEasyModeConfigInput {
  configId: String!
  path: String
  projectId: ID!
  sliders: [RsaMotorStudioUpdateSliderInput!]!
}
```

### Fields

#### `RsaMotorStudioUpdateEasyModeConfigInput.configId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RsaMotorStudioUpdateEasyModeConfigInput.path` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RsaMotorStudioUpdateEasyModeConfigInput.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

ID of the project to which the easymode config will be added.

#### `RsaMotorStudioUpdateEasyModeConfigInput.sliders` · [`[RsaMotorStudioUpdateSliderInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-update-slider-input.md) non-null input renesas-preview
