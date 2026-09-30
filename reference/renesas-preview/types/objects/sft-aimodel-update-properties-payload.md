---
title: "SftAIModelUpdatePropertiesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel-update-properties-payload"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftAIModelUpdatePropertiesPayload

### Returned By

[`sftAIModelUpdateCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-aimodel-update-custom-properties.md) mutation

```graphql
type SftAIModelUpdatePropertiesPayload {
  customProperties: [SftAIModelCustomProperty!]!
  id: ID!
}
```

### Fields

#### `SftAIModelUpdatePropertiesPayload.customProperties` · [`[SftAIModelCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel-custom-property.md) non-null object renesas-preview

#### `SftAIModelUpdatePropertiesPayload.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
