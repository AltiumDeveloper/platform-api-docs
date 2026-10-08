---
title: "RsaMotorStudioUpdateTuningInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-update-tuning-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioUpdateTuningInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioUpdateTuning`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-update-tuning.md) mutation

```graphql
input RsaMotorStudioUpdateTuningInput {
  applicationMount: String
  folderId: String
  id: ID!
  name: String
  path: String
  tuningType: TuningType
}
```

### Fields

#### `applicationMount` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `folderId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `path` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `tuningType` · [`TuningType`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/tuning-type.md) enum
