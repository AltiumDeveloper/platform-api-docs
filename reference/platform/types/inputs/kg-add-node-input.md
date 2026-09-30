---
title: "KgAddNodeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/kg-add-node-input"
bounded_context: "Platform"
kind: "inputs"
experimental: true
deprecated: false
---

# KgAddNodeInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`kgAddNode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/kg-add-node.md) mutation

```graphql
input KgAddNodeInput {
  description: String
  id: ID!
  name: String!
  parameters: [KgNodeParameterInput!]
  parentFolderGuid: String!
}
```

### Fields

#### `KgAddNodeInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

An optional description of the entity.

#### `KgAddNodeInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The grid identifier of the entity to register.

#### `KgAddNodeInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The display name of the entity.

#### `KgAddNodeInput.parameters` · [`[KgNodeParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/kg-node-parameter-input.md) list input platform

Optional parameters to attach to the entity.

#### `KgAddNodeInput.parentFolderGuid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the parent folder that will contain the entity.
