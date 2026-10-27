---
title: "SysSdmCreateSystemModelVersionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-sdm-create-system-model-version-input"
bounded_context: "System Design"
kind: "inputs"
experimental: true
deprecated: false
---

# SysSdmCreateSystemModelVersionInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`sysSdmCreateSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-sdm-create-system-model-version.md) mutation

```graphql
input SysSdmCreateSystemModelVersionInput {
  applicationVersion: String
  schemaVersion: String
  systemModelId: ID!
  systemModelVersionFileId: String!
  tags: [String!]
  version: Int!
}
```

### Fields

#### `applicationVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `schemaVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `systemModelId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `systemModelVersionFileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `tags` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

#### `version` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar
