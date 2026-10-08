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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

An optional description of the entity.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The grid identifier of the entity to register.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The display name of the entity.

#### `parameters` · [`[KgNodeParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/kg-node-parameter-input.md) list input

Optional parameters to attach to the entity.

#### `parentFolderGuid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the parent folder that will contain the entity.
