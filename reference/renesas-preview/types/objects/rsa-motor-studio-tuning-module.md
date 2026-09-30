---
title: "RsaMotorStudioTuningModule"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-module"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioTuningModule

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RsaMotorStudioTuningRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-revision.md) object

```graphql
type RsaMotorStudioTuningModule {
  moduleType: TuningModuleType!
  parameters: [RsaMotorStudioTuningParameter!]!
  path: String!
}
```

### Fields

#### `RsaMotorStudioTuningModule.moduleType` · [`TuningModuleType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/tuning-module-type.md) non-null enum renesas-preview

#### `RsaMotorStudioTuningModule.parameters` · [`[RsaMotorStudioTuningParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-parameter.md) non-null object renesas-preview

#### `RsaMotorStudioTuningModule.path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
