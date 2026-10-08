---
title: "SftAIModelCreateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-aimodel-create-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftAIModelCreateInput

### Member Of

[`sftAIModelCreate`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-aimodel-create.md) mutation

```graphql
input SftAIModelCreateInput {
  customProperties: [SftAIModelCustomPropertyInput!]
  description: String
  fileToken: String
  folderId: String!
  name: String!
}
```

### Fields

#### `customProperties` · [`[SftAIModelCustomPropertyInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-aimodel-custom-property-input.md) list input

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `fileToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
