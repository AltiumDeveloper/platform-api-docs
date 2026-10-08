---
title: "RsaMotorStudioCreateTuningInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-tuning-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioCreateTuningInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioCreateTuning`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-create-tuning.md) mutation

```graphql
input RsaMotorStudioCreateTuningInput {
  applicationMount: String!
  folderId: String!
  name: String!
  path: String!
  tuningType: TuningType!
}
```

### Fields

#### `applicationMount` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `tuningType` · [`TuningType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/tuning-type.md) non-null enum
