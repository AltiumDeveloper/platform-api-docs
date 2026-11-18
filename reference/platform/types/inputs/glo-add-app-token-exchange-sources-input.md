---
title: "GloAddAppTokenExchangeSourcesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-add-app-token-exchange-sources-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloAddAppTokenExchangeSourcesInput

### Member Of

[`gloAddAppTokenExchangeSources`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-app-token-exchange-sources.md) mutation

```graphql
input GloAddAppTokenExchangeSourcesInput {
  targetAppId: ID!
  thirdPartyAppIds: [ID!]!
}
```

### Fields

#### `targetAppId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier for the App that tokens will be exchanged to.

#### `thirdPartyAppIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifiers of the Apps whose tokens can be exchanged to the target App.
