---
title: "sftAIModelsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-aimodels-by-ids"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: false
deprecated: false
---

# sftAIModelsByIds

Gets AI models by identifiers.

### Type

#### [`SftAIModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel.md) object

```graphql
sftAIModelsByIds(
  ids: [ID!]!
): [SftAIModel!]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
