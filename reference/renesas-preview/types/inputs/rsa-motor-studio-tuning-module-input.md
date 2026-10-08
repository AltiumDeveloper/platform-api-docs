---
title: "RsaMotorStudioTuningModuleInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-tuning-module-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioTuningModuleInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RsaMotorStudioCreateTuningRevisionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-tuning-revision-input.md) input

```graphql
input RsaMotorStudioTuningModuleInput {
  moduleType: TuningModuleType!
  parameters: [RsaMotorStudioTuningParameterInput!]!
  path: String!
}
```

### Fields

#### `moduleType` · [`TuningModuleType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/tuning-module-type.md) non-null enum

#### `parameters` · [`[RsaMotorStudioTuningParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-tuning-parameter-input.md) non-null input

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
