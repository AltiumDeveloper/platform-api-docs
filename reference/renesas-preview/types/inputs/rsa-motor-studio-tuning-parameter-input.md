---
title: "RsaMotorStudioTuningParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-tuning-parameter-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioTuningParameterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RsaMotorStudioTuningModuleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-tuning-module-input.md) input

```graphql
input RsaMotorStudioTuningParameterInput {
  evidence: RsaMotorStudioParameterEvidenceInput
  name: String!
  path: String!
  source: ParamSource!
  units: String
  value: String!
}
```

### Fields

#### `evidence` · [`RsaMotorStudioParameterEvidenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-parameter-evidence-input.md) input

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `source` · [`ParamSource!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/param-source.md) non-null enum

#### `units` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
