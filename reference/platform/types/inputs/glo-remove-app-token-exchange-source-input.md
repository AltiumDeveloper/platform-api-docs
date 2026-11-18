---
title: "GloRemoveAppTokenExchangeSourceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-remove-app-token-exchange-source-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloRemoveAppTokenExchangeSourceInput

### Member Of

[`gloRemoveAppTokenExchangeSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-app-token-exchange-source.md) mutation

```graphql
input GloRemoveAppTokenExchangeSourceInput {
  targetAppId: ID!
  thirdPartyAppId: ID!
}
```

### Fields

#### `targetAppId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier for the App that tokens are exchanged to.

#### `thirdPartyAppId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier of the App to be removed from the token exchange sources of the target App.
