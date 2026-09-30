---
title: "SftAIModelCreatePropertiesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-aimodel-create-properties-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftAIModelCreatePropertiesInput

### Member Of

[`sftAIModelCreateCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-aimodel-create-custom-properties.md) mutation

```graphql
input SftAIModelCreatePropertiesInput {
  customProperties: [SftAIModelCustomPropertyInput!]!
  id: ID!
}
```

### Fields

#### `SftAIModelCreatePropertiesInput.customProperties` · [`[SftAIModelCustomPropertyInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-aimodel-custom-property-input.md) non-null input renesas-preview

#### `SftAIModelCreatePropertiesInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
