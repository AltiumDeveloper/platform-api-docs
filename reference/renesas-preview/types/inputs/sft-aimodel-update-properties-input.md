---
title: "SftAIModelUpdatePropertiesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-aimodel-update-properties-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftAIModelUpdatePropertiesInput

### Member Of

[`sftAIModelUpdateCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-aimodel-update-custom-properties.md) mutation

```graphql
input SftAIModelUpdatePropertiesInput {
  customProperties: [SftAIModelCustomPropertyInput!]!
  id: ID!
}
```

### Fields

#### `customProperties` · [`[SftAIModelCustomPropertyInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-aimodel-custom-property-input.md) non-null input

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
