---
title: "SftSimSimulationCreateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-sim-simulation-create-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftSimSimulationCreateInput

### Member Of

[`sftSimSimulationCreate`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-sim-simulation-create.md) mutation

```graphql
input SftSimSimulationCreateInput {
  customProperties: [SftSimSimulationCustomPropertyInput!]
  description: String
  folderId: String!
  name: String!
  repositoryType: SftSimSimulationRepositoryType
  type: SftSimSimulationType!
  url: String
}
```

### Fields

#### `SftSimSimulationCreateInput.customProperties` · [`[SftSimSimulationCustomPropertyInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-sim-simulation-custom-property-input.md) list input renesas-preview

#### `SftSimSimulationCreateInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SftSimSimulationCreateInput.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftSimSimulationCreateInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftSimSimulationCreateInput.repositoryType` · [`SftSimSimulationRepositoryType`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/sft-sim-simulation-repository-type.md) enum renesas-preview

#### `SftSimSimulationCreateInput.type` · [`SftSimSimulationType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/sft-sim-simulation-type.md) non-null enum renesas-preview

#### `SftSimSimulationCreateInput.url` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
