---
title: "RsaMotorStudioDeleteVariableSetInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-delete-variable-set-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioDeleteVariableSetInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioDeleteVariableSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-delete-variable-set.md) mutation

```graphql
input RsaMotorStudioDeleteVariableSetInput {
  projectId: ID!
  variableSetId: String!
}
```

### Fields

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `variableSetId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
