---
title: "rsaMotorStudioVariableSetById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-variable-set-by-id"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioVariableSetById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Get a variable set by id.

```graphql
rsaMotorStudioVariableSetById(
  projectId: ID!
  variableSetId: String!
): RsaMotorStudioVariableSet
```

### Arguments

#### `rsaMotorStudioVariableSetById.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `rsaMotorStudioVariableSetById.variableSetId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

### Type

#### [`RsaMotorStudioVariableSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set.md) object renesas-preview **EXPERIMENTAL**
