---
title: "SolBldScaffoldingByConfigurationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-bld-scaffolding-by-configuration-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolBldScaffoldingByConfigurationInput

### Member Of

[`solBldScaffoldingByConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-bld-scaffolding-by-configuration.md) mutation

```graphql
input SolBldScaffoldingByConfigurationInput {
  configurationFileId: String!
  name: String!
  softwareProjectId: ID
}
```

### Fields

#### `configurationFileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `softwareProjectId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar
