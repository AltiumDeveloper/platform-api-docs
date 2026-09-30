---
title: "RsaMotorStudioCreateTuningRevisionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-tuning-revision-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioCreateTuningRevisionInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioCreateTuningRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-create-tuning-revision.md) mutation

```graphql
input RsaMotorStudioCreateTuningRevisionInput {
  modules: [RsaMotorStudioTuningModuleInput!]!
  tuningId: ID!
}
```

### Fields

#### `RsaMotorStudioCreateTuningRevisionInput.modules` · [`[RsaMotorStudioTuningModuleInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-tuning-module-input.md) non-null input renesas-preview

#### `RsaMotorStudioCreateTuningRevisionInput.tuningId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
