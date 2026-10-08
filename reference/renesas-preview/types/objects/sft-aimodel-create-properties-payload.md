---
title: "SftAIModelCreatePropertiesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel-create-properties-payload"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftAIModelCreatePropertiesPayload

### Returned By

[`sftAIModelCreateCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-aimodel-create-custom-properties.md) mutation

```graphql
type SftAIModelCreatePropertiesPayload {
  customProperties: [SftAIModelCustomProperty!]!
  id: ID!
}
```

### Fields

#### `customProperties` · [`[SftAIModelCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel-custom-property.md) non-null object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
