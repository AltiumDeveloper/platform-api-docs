---
title: "RsaMotorStudioCreateVariableSetRevisionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-create-variable-set-revision-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioCreateVariableSetRevisionInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioCreateVariableSetRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/rsa-motor-studio-create-variable-set-revision.md) mutation

```graphql
input RsaMotorStudioCreateVariableSetRevisionInput {
  entries: [RsaMotorStudioVariableSetEntryInput!]!
  projectId: ID!
  variableSetId: String!
}
```

### Fields

#### `entries` · [`[RsaMotorStudioVariableSetEntryInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-variable-set-entry-input.md) non-null input

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `variableSetId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
