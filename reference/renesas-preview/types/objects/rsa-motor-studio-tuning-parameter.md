---
title: "RsaMotorStudioTuningParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-parameter"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioTuningParameter

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RsaMotorStudioTuningModule`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-module.md) object

```graphql
type RsaMotorStudioTuningParameter {
  evidence: RsaMotorStudioTuningParameterEvidence
  name: String!
  path: String!
  source: ParamSource!
  units: String
  value: String!
}
```

### Fields

#### `evidence` · [`RsaMotorStudioTuningParameterEvidence`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-parameter-evidence.md) object

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `source` · [`ParamSource!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/param-source.md) non-null enum

#### `units` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
