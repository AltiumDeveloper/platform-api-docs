---
title: "RsaMotorStudioCreateVariableSetInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-variable-set-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioCreateVariableSetInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioCreateVariableSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-create-variable-set.md) mutation

```graphql
input RsaMotorStudioCreateVariableSetInput {
  description: String
  initialEntries: [RsaMotorStudioVariableSetEntryInput!]
  name: String!
  path: String!
  projectId: ID!
}
```

### Fields

#### `RsaMotorStudioCreateVariableSetInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `RsaMotorStudioCreateVariableSetInput.initialEntries` · [`[RsaMotorStudioVariableSetEntryInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-variable-set-entry-input.md) list input renesas-preview

#### `RsaMotorStudioCreateVariableSetInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RsaMotorStudioCreateVariableSetInput.path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `RsaMotorStudioCreateVariableSetInput.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
